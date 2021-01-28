/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'

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
        totalBytes: bundle.totalBytes,
        formattedTotalBytes: BytesToKiloBytes(bundle.totalBytes)
      }
    })
    const {context} = github
    octokit.issues.createComment({
      ...context.repo,
      issue_number: context.payload.pull_request?.number || -1,
      body: JSON.stringify(filteredResult, null, 2)
    })

    core.setOutput('directory', filteredResult)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
