import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'
import table from 'markdown-table'
import {S3} from 'aws-sdk'

const s3 = new S3()

const cleanUpFileName = (filePath: string): string => {
  return filePath.replace(/^.*(\\|\/|:)/, '')
}

export const BytesToKiloBytes = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'no difference'
  const i: number = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)).toString()
  )
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
}

interface Result {
  bundleName: string
  totalBytes: number
}

const uploadFile = async (
  branch: string,
  compareBundleSize: Result[]
): Promise<S3.ManagedUpload.SendData> => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: 'cko-prism-frontend',
        Key: `checks/${branch}/bundle-size.json`,
        Body: JSON.stringify(compareBundleSize)
      },
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }
    )
  })
}

const download = async <T>(branch: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: 'cko-prism-frontend',
        Key: `checks/${branch}/bundle-size.json`
      },
      (err, data) => {
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

export const generateCompareBundleSizeTable = (
  base: Result[],
  compare: Result[]
): string => {
  return table([
    [
      'Package name',
      'old bundle size(Bytes)',
      'new bundle size(Bytes)',
      'Diff'
    ],
    ...base.map(results => {
      const comparisonBundle = compare.find(item => {
        return item.bundleName === results.bundleName
      })
      if (comparisonBundle === undefined) {
        return [
          `${cleanUpFileName(results.bundleName)}`,
          `${BytesToKiloBytes(results.totalBytes)}`,
          `No bundle found`,
          `N/A`
        ]
      }

      return [
        `${cleanUpFileName(results.bundleName)}`,
        `${BytesToKiloBytes(results.totalBytes)}`,
        `${BytesToKiloBytes(comparisonBundle.totalBytes)}`,
        `${BytesToKiloBytes(results.totalBytes - comparisonBundle.totalBytes)}`
      ]
    })
  ])
}

const generateNewBundleSizeTable = (compare: Result[]): string => {
  return table([
    ['Package name', 'bundle size(Bytes)'],
    ...compare.map(results => {
      return [
        `${cleanUpFileName(results.bundleName)}`,
        `${BytesToKiloBytes(results.totalBytes)}`
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

    const baseBundleSize = await download<Result[]>(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      process.env.GITHUB_BASE_REF!
    )

    const {context} = github

    const pullRequest = context.payload.pull_request

    if (pullRequest == null) {
      core.setFailed('No pull request found.')
      return
    }

    const pull_request_number = pullRequest.number

    const newTable = baseBundleSize
      ? generateCompareBundleSizeTable(baseBundleSize, compareBundleSize)
      : generateNewBundleSizeTable(compareBundleSize)

    await octokit.issues.createComment({
      ...context.repo,
      issue_number: pull_request_number,
      body: newTable
    })

    await uploadFile(process.env.GITHUB_HEAD_REF!, compareBundleSize)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}
run()
