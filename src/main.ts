/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import * as github from '@actions/github'
import {promisify} from 'util'
import childProcess from 'child_process'
import fs from 'fs'
import table from 'markdown-table'

const exec = promisify(childProcess.exec)

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
        formattedTotalBytes: BytesToKiloBytes(bundle.totalBytes)
      }
    })

    const getCoverageFile = (): any => {
      try {
        return JSON.parse(fs.readFileSync('./bundle-size.json', 'utf8'))
      } catch (e) {
        console.log('no bundle size file found')
        return undefined
      }
    }

    await exec(`git checkout -f ${process.env.GITHUB_BASE_REF} `)

    const baseCoverage = getCoverageFile()

    await exec(`git checkout -f ${process.env.GITHUB_HEAD_REF}`)

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

    if (baseCoverage) {
      const newTable = generateTable(baseCoverage, filteredResult)

      const {context} = github
      octokit.issues.createComment({
        ...context.repo,
        issue_number: context.payload.pull_request?.number || -1,
        body: newTable
      })

      if (filteredResult) {
        const remote = `https://${process.env.GITHUB_ACTOR}:${github_token}@github.com/${process.env.GITHUB_REPOSITORY}.git`

        await exec('git config  http.sslVerify "false"')
        await exec('git config --local user.name "bundleSize"')
        await exec('git config --local user.email "bundleSize@bot.com"')
        await exec('git add ./bundle-size')
        await exec('git commit -m "Updating bundle size"')
        await exec(`git push "${remote}" HEAD:"${process.env.GITHUB_HEAD_REF}"`)
      }

      core.setOutput('time', new Date().toTimeString())
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}
run()
