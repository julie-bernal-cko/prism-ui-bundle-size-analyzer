import {generateCompareBundleSizeTable} from './main'

const baseData = [
  {bundleName: 'build/static/js/dog.9c5b6189.chunk.js', totalBytes: 54266},
  {bundleName: 'build/static/js/cat.9c5b6189.chunk.js', totalBytes: 54266}
]

const addedData = [
  {bundleName: 'build/static/js/dog.9c5b6189.chunk.js', totalBytes: 54266},
  {bundleName: 'build/static/js/cat.9c5b6189.chunk.js', totalBytes: 54266},
  {bundleName: 'build/static/js/parrot.9c5b6189.chunk.js', totalBytes: 54266}
]

const compareData = [
  {bundleName: 'build/static/js/dog.9c5b6189.chunk.js', totalBytes: 54266}
]

async function run(): Promise<void> {
  console.log('new file', generateCompareBundleSizeTable(baseData, addedData))
  //   console.log(
  //     'delete file',
  //     generateCompareBundleSizeTable(baseData, compareData)
  //   )
  //   console.log('same', generateCompareBundleSizeTable(baseData, baseData))
}
run()
