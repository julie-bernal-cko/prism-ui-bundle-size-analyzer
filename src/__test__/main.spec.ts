import {generateTable} from '../main'

const baseData = [
  {bundleName: '0.9c5b6189.chunk.js', formattedTotalBytes: '53.0 KB'},
  {bundleName: '1.76f12889.chunk.js', formattedTotalBytes: '23.2 KB'},
  {bundleName: '17.6b67db9d.chunk.js', formattedTotalBytes: '1.1 MB'},
  {bundleName: '18.08c7a81d.chunk.js', formattedTotalBytes: '1.2 MB'},
  {bundleName: '19.e6d65464.chunk.js', formattedTotalBytes: '175.2 KB'},
  {bundleName: '2.f19cd4e8.chunk.js', formattedTotalBytes: '451.4 KB'},
  {bundleName: '20.18a663a8.chunk.js', formattedTotalBytes: '7.5 KB'},
  {bundleName: '21.86a31928.chunk.js', formattedTotalBytes: '1.2 MB'},
  {bundleName: '22.81a35a2a.chunk.js', formattedTotalBytes: '2.2 MB'},
  {bundleName: '3.467ebdfa.chunk.js', formattedTotalBytes: '23.3 KB'},
  {bundleName: '4.999d5c4d.chunk.js', formattedTotalBytes: '18.2 KB'},
  {bundleName: '5.bdc07627.chunk.js', formattedTotalBytes: '20.4 KB'},
  {
    bundleName: 'Blacklists.8c8cba4a.chunk.js',
    formattedTotalBytes: '19.4 KB'
  },
  {bundleName: 'Dashboard.7325f5b9.chunk.js', formattedTotalBytes: '2.4 KB'},
  {bundleName: 'Lists.a36e93b0.chunk.js', formattedTotalBytes: '81.8 KB'},
  {
    bundleName: 'RiskProfiles.fea165ed.chunk.js',
    formattedTotalBytes: '36.1 KB'
  },
  {bundleName: 'Routing.7c45834a.chunk.js', formattedTotalBytes: '447.4 KB'},
  {bundleName: 'Rules.96f39fe6.chunk.js', formattedTotalBytes: '127.5 KB'},
  {
    bundleName: 'RulesEditor.3a591892.chunk.js',
    formattedTotalBytes: '8.3 KB'
  },
  {
    bundleName: 'SankeyContainer.d1d0f7df.chunk.js',
    formattedTotalBytes: '19.9 KB'
  },
  {bundleName: 'main.afc988a7.chunk.js', formattedTotalBytes: '48.8 KB'},
  {bundleName: 'runtime-main.58c93740.js', formattedTotalBytes: '2.7 KB'},
  {bundleName: 'xlsx.5db1611f.chunk.js', formattedTotalBytes: '225 Bytes'}
]

describe('generate Table', () => {
  it('should generate a table with the right amount of row and headers', () => {
    console.log(generateTable(baseData, baseData))
  })
})
