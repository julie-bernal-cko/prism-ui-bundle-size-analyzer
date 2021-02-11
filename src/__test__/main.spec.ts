import {generateCompareBundleSizeTable} from '../main'

const transformedData = [
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
]

describe('generate Table', () => {
  it('should generate table in the right format', () => {
    expect(generateCompareBundleSizeTable(transformedData))
      .toEqual(`| Status | Package name             | Old bundle size(Bytes) | New bundle size(Bytes) | Diff          |
| ------ | ------------------------ | ---------------------- | --------------------- | ------------- |
| ↔️     | cat.9c5b6189.chunk.js    | 53.0 KB                | 53.0 KB               | no difference |
| ↔️     | parrot.9c5b6189.chunk.js | 53.0 KB                | 3.4 KB                | - 49.6 KB     |
| ✅      | newCat.9c5b6189.chunk.js | N/A                    | 53.0 KB               | N/A           |
| ❌      | dog.9c5b6189.chunk.js    | 53.0 KB                | N/A                   | - 53.0 KB     |`)
  })
})
