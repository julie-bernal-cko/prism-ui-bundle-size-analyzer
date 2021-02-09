import {findDeletedFiles, findNewFiles, transformFilesList} from '../utils'

describe('utils', () => {
  const masterData = [
    {bundleName: 'dog', totalBytes: 54266},
    {bundleName: 'cat', totalBytes: 54266}
  ]

  const newData = [
    {bundleName: 'dog', totalBytes: 54266},
    {bundleName: 'cat', totalBytes: 54266},
    {bundleName: 'parrot', totalBytes: 54266},
    {bundleName: 'kitten', totalBytes: 54266}
  ]

  it('Should return empty array if no new files were added', () => {
    expect(findNewFiles(masterData, masterData)).toEqual([])
  })

  it('Should return a list of new files', () => {
    const result = findNewFiles(newData, masterData)
    expect(result).toEqual([
      {
        bundleName: 'parrot',
        totalBytes: 54266
      },
      {
        bundleName: 'kitten',
        totalBytes: 54266
      }
    ])
  })

  it('Should return empty array if no deleted files', () => {
    expect(findDeletedFiles(masterData, masterData)).toEqual([])
  })

  it('Should return a list of deleted files', () => {
    const result = findDeletedFiles(newData, masterData)
    expect(result).toEqual([
      {
        bundleName: 'parrot',
        totalBytes: 54266
      },
      {
        bundleName: 'kitten',
        totalBytes: 54266
      }
    ])
  })

  it('Should return empty array if lists are empty', () => {
    const results = transformFilesList([], [])
    expect(results).toEqual([])
  })

  it('Should return a list of new files if we have no comparison branch', () => {
    const data = [
      {bundleName: 'build/static/js/dog.9c5b6189.chunk.js', totalBytes: 54266},
      {bundleName: 'build/static/js/cat.9c5b6189.chunk.js', totalBytes: 54266},
      {
        bundleName: 'build/static/js/parrot.9c5b6189.chunk.js',
        totalBytes: 54266
      }
    ]

    const results = transformFilesList(data, [])
    expect(results).toEqual([
      {
        status: '✅',
        fileName: 'dog.9c5b6189.chunk.js',
        oldBundleSize: 'N/A',
        newBundleSize: '53.0 KB',
        diff: 'N/A'
      },
      {
        status: '✅',
        fileName: 'cat.9c5b6189.chunk.js',
        oldBundleSize: 'N/A',
        newBundleSize: '53.0 KB',
        diff: 'N/A'
      },
      {
        status: '✅',
        fileName: 'parrot.9c5b6189.chunk.js',
        oldBundleSize: 'N/A',
        newBundleSize: '53.0 KB',
        diff: 'N/A'
      }
    ])
  })

  it('Should return a list of new files, current files and delete files', () => {
    const data = [
      {bundleName: 'build/static/js/dog.9c5b6189.chunk.js', totalBytes: 54266},
      {bundleName: 'build/static/js/cat.9c5b6189.chunk.js', totalBytes: 54266},
      {
        bundleName: 'build/static/js/parrot.9c5b6189.chunk.js',
        totalBytes: 54266
      }
    ]
    const newDataset = [
      {bundleName: 'build/static/js/cat.9c5b6189.chunk.js', totalBytes: 54266},
      {
        bundleName: 'build/static/js/parrot.9c5b6189.chunk.js',
        totalBytes: 3500
      },
      {
        bundleName: 'build/static/js/newCat.9c5b6189.chunk.js',
        totalBytes: 54266
      }
    ]
    const results = transformFilesList(newDataset, data)
    expect(results).toEqual([
      {
        status: '↔️',
        fileName: 'cat.9c5b6189.chunk.js',
        oldBundleSize: '53.0 KB',
        newBundleSize: '53.0 KB',
        diff: 'no difference'
      },
      {
        status: '↔️',
        fileName: 'parrot.9c5b6189.chunk.js',
        oldBundleSize: '53.0 KB',
        newBundleSize: '3.4 KB',
        diff: '- 49.6 KB'
      },
      {
        status: '✅',
        fileName: 'newCat.9c5b6189.chunk.js',
        oldBundleSize: 'N/A',
        newBundleSize: '53.0 KB',
        diff: 'N/A'
      },
      {
        status: '❌',
        fileName: 'dog.9c5b6189.chunk.js',
        oldBundleSize: '53.0 KB',
        newBundleSize: 'N/A',
        diff: '- 53.0 KB'
      }
    ])
  })
})
