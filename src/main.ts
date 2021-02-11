/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'
import table from 'markdown-table'
import {S3} from 'aws-sdk'
import {transformFilesList} from './utils'

const s3 = new S3()

export const cleanUpFileName = (filePath: string): string => {
  return filePath.replace(/^.*(\\|\/|:)/, '').split('.')[0]
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

export interface Result {
  bundleName: string
  totalBytes: number
}

export interface BundleInformation {
  status: string
  fileName: string
  oldBundleSize: string
  newBundleSize: string
  diff: string
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

export const generateCompareBundleSizeTable = (data: BundleInformation[]) => {
  const mappedData = data.map((item: BundleInformation) => [
    `${item.status}`,
    `${item.fileName}`,
    `${item.oldBundleSize}`,
    `${item.newBundleSize}`,
    `${item.diff}`
  ])

  return table([
    [
      'Status',
      'Package name',
      'Old bundle size(Bytes)',
      'New bundle size(Bytes)',
      'Diff'
    ],
    ...mappedData
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

    const transformedData = transformFilesList(
      compareBundleSize,
      baseBundleSize
    )

    const newTable = baseBundleSize
      ? generateCompareBundleSizeTable(transformedData)
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
