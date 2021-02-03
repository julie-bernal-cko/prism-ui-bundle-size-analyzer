/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'
import fs from 'fs'
import table from 'markdown-table'
import {S3} from 'aws-sdk'

// get file from checkout-ui  DONE
// get filtered current bundle-size  DONE
//compare push to table and add to comment ignore
// save to a new file  tidy up
//upload that file to s3

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

const uploadFile = async (branch: string, filePath: string): Promise<any> => {
  const readStream = fs.createReadStream(filePath)

  return new Promise<S3.ManagedUpload.SendData>((resolve, reject) => {
    s3.upload(
      {
        Bucket: 'cko-prism-frontend',
        Key: `checks/${branch}/bundle-size.json`,
        Body: readStream
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

async function run(): Promise<void> {
  try {
    const github_token = core.getInput('GITHUB_TOKEN', {required: true})
    const octokit = new github.GitHub(github_token)
    const directory: string = core.getInput('directory')
    const result = await explore(directory, {
      output: {format: 'json'}
    })

    const filteredResult = result.bundles.map(bundle => {
      return {
        bundleName: cleanUpFileName(bundle.bundleName),
        formattedTotalBytes: BytesToKiloBytes(bundle.totalBytes)
      }
    })

    const getBundleSizeFile = (): any => {
      try {
        return JSON.parse(fs.readFileSync('./bundle-size.json', 'utf8'))
      } catch (e) {
        console.log('no bundle size file found')
        return undefined
      }
    }

    const createBundleSizeFile = (): any => {
      const data = JSON.stringify(filteredResult)
      try {
        return fs.writeFileSync('./bundle-size.json', data)
      } catch (e) {
        console.log(e, 'cannot create file')
        return undefined
      }
    }

    const compareBundleSize = getBundleSizeFile()

    const baseBundleSize = await download(
      process.env.GITHUB_BASE_REF!
    ).catch(err => console.log(err))

    const generateTable = (base: any, compare: any): any => {
      return table([
        ['Package name', 'old bundle size(Bytes)', 'new bundle size(Bytes)'],
        base.map((results: any) => {
          const comparisonBundleSize = compare.find(
            (item: any) => item.bundleName === results.bundleName
          ).formattedTotalBytes
          return [
            `${results.bundleName}%`,
            `${results.formattedTotalBytes}%`,
            `${comparisonBundleSize}%`,
            `${(results.formattedTotalBytes - comparisonBundleSize).toFixed(
              2
            )}%`
          ]
        })
      ])
    }

    const {context} = github

    const pullRequest = context.payload.pull_request

    if (pullRequest == null) {
      core.setFailed('No pull request found.')
      return
    }

    const pull_request_number = pullRequest.number

    createBundleSizeFile()

    if (baseBundleSize) {
      const newTable = generateTable(baseBundleSize, filteredResult)

      await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request_number,
        body: newTable
      })
    } else {
      console.log('no bundle size found')
    }

    await uploadFile(
      process.env.GITHUB_HEAD_REF!,
      'bundle-size-compare/bundle-size.json'
    )
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}
run()
