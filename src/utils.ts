import {Result, BundleInformation} from './main'

export const cleanUpFileName = (filePath: string): string => {
  return filePath.replace(/^.*(\\|\/|:)/, '')
}

export const BytesToKiloBytes = (bytes: number): string => {
  const isNegative = bytes < 0
  const positiveBytes = isNegative ? bytes * -1 : bytes
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'no difference'
  const i: number = parseInt(
    Math.floor(Math.log(positiveBytes) / Math.log(1024)).toString()
  )
  if (i === 0) return `${positiveBytes} ${sizes[i]}`
  return `${isNegative ? '- ' : ''}${(
    positiveBytes / Math.pow(1024, i)
  ).toFixed(1)} ${sizes[i]}`
}

export const findNewFiles = (
  newData: Result[],
  oldData: Result[]
): Result[] => {
  return newData.filter(newDataItem => {
    return !oldData.some(oldDataItem => {
      return (
        oldDataItem.bundleName.split('.')[0] ===
        newDataItem.bundleName.split('.')[0]
      )
    })
  })
}

export const findDeletedFiles = (
  oldData: Result[],
  newData: Result[]
): Result[] => {
  return findNewFiles(oldData, newData)
}

export const transformFilesList = (
  newData: Result[],
  oldData: Result[]
): BundleInformation[] => {
  if (!oldData.length) {
    return newData.map(item => {
      return {
        status: '✅',
        fileName: cleanUpFileName(item.bundleName),
        oldBundleSize: 'N/A',
        newBundleSize: BytesToKiloBytes(item.totalBytes),
        diff: 'N/A'
      }
    })
  }
  const newFiles = findNewFiles(newData, oldData)
  const deletedFiles = findDeletedFiles(oldData, newData).map(item => {
    const oldFile = oldData.find(oldFileItem => {
      return oldFileItem.bundleName === item.bundleName
    })
    return {
      status: '❌',
      fileName: cleanUpFileName(item.bundleName),
      oldBundleSize: BytesToKiloBytes(oldFile?.totalBytes || 0),
      newBundleSize: 'N/A',
      diff: BytesToKiloBytes((oldFile?.totalBytes || 0) * -1)
    }
  })

  const files = newData.map(item => {
    const isNewFile = newFiles.some(newFileItem => {
      return item.bundleName === newFileItem.bundleName
    })

    const oldFile = oldData.find(oldFileItem => {
      return oldFileItem.bundleName === item.bundleName
    })

    return {
      status: isNewFile ? '✅' : '↔️',
      fileName: cleanUpFileName(item.bundleName),
      oldBundleSize:
        isNewFile || !oldFile ? 'N/A' : BytesToKiloBytes(oldFile.totalBytes),
      newBundleSize: BytesToKiloBytes(item.totalBytes),
      diff:
        isNewFile || !oldFile
          ? 'N/A'
          : BytesToKiloBytes(item.totalBytes - oldFile.totalBytes)
    }
  })
  const mergedFiles = [...files, ...deletedFiles]
  return mergedFiles
}
