/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'
import table from 'markdown-table'
import {S3} from 'aws-sdk'

const s3 = new S3()

const cleanUpFileName = (filePath: string): string => {
  return filePath.replace(/^.*(\\|\/|:)/, '')
}

const BytesToKiloBytes = (bytes: any): any => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)) as any, 10)
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

const uploadFile = async (
  branch: string,
  compareBundleSize: any
): Promise<any> => {
  return new Promise<S3.ManagedUpload.SendData>((resolve, reject) => {
    s3.upload(
      {
        Bucket: 'cko-prism-frontend',
        Key: `checks/${branch}/bundle-size.json`,
        Body: JSON.stringify(compareBundleSize)
      },
      (err: any, data: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }
    )
  })
}

const download = async (branch: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    s3.getObject(
      {
        Bucket: 'cko-prism-frontend',
        Key: `checks/${branch}/bundle-size.json`
      },
      (err: any, data: any) => {
        if (err) {
          reject(err)
        } else {
          if (data.Body) {
            resolve(JSON.parse(data.Body.toString()))
          }
        }
      }
    )
  })
}

export const generateTable = (base: any, compare: any): any => {
  return table([
    [
      'Package name',
      'old bundle size(Bytes)',
      'new bundle size(Bytes)',
      'other'
    ],
    ...base.map((results: any) => {
      const comparisonBundleSize = compare.find(
        (item: any) => item.bundleName === results.bundleName
      ).totalBytes
      console.log('comparisonBundleSize', comparisonBundleSize)
      return [
        `${cleanUpFileName(results.bundleName)}`,
        `${BytesToKiloBytes(results.totalBytes)}`,
        `${BytesToKiloBytes(comparisonBundleSize)}`,
        `${BytesToKiloBytes(
          (results.totalBytes - comparisonBundleSize).toFixed(2)
        )}`
      ]
    })
  ])
}

async function run(): Promise<void> {
  try {
    const github_token = core.getInput('GITHUB_TOKEN', {required: true})
    const octokit = new github.GitHub(github_token)
    const directory: string = core.getInput('directory')
    const result = await explore(directory, {
      output: {format: 'json'}
    })

    const compareBundleSize = result.bundles.map(bundle => {
      return {
        bundleName: bundle.bundleName,
        totalBytes: bundle.totalBytes
      }
    })

    const baseBundleSize = await download(
      process.env.GITHUB_BASE_REF!
      // eslint-disable-next-line github/no-then
    ).catch(err => console.log(err))

    const {context} = github

    const pullRequest = context.payload.pull_request

    if (pullRequest == null) {
      core.setFailed('No pull request found.')
      return
    }

    const pull_request_number = pullRequest.number

    if (baseBundleSize) {
      const newTable = generateTable(baseBundleSize, compareBundleSize)

      await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request_number,
        body: newTable
      })
    } else {
      console.log('no bundle size found')
    }

    await uploadFile(process.env.GITHUB_HEAD_REF!, compareBundleSize)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}
run()
