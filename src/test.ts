/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import {explore} from 'source-map-explorer'
import fs from 'fs'

async function run(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  //   let data = JSON.stringify(student);
  // fs.writeFileSync('student-2.json', data);

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

  const createBundleSizeFile = async () => {
    try {
      const result = await explore('build/static/js/*.*', {
        output: {format: 'json'}
      })

      console.log('result', result)

      const filteredResult = result.bundles.map(bundle => {
        return {
          bundleName: cleanUpFileName(bundle.bundleName),
          formattedTotalBytes: BytesToKiloBytes(bundle.totalBytes)
        }
      })
      const data = JSON.stringify(filteredResult)
      try {
        return fs.writeFileSync('./bundle-size.json', data)
      } catch (e) {
        console.log(e, 'cannot create file')
        return undefined
      }
    } catch (e) {
      console.log(e, 'not working')
    }
  }

  createBundleSizeFile()
}

run()
