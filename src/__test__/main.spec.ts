import {generateTable} from '../main'

const baseData = [
  {bundleName: 'build/static/js/0.9c5b6189.chunk.js', totalBytes: 54266},
  {bundleName: 'build/static/js/1.76f12889.chunk.js', totalBytes: 23787},
  {bundleName: 'build/static/js/17.6b67db9d.chunk.js', totalBytes: 1145472},
  {bundleName: 'build/static/js/18.08c7a81d.chunk.js', totalBytes: 1287884},
  {bundleName: 'build/static/js/19.e6d65464.chunk.js', totalBytes: 179442},
  {bundleName: 'build/static/js/2.f19cd4e8.chunk.js', totalBytes: 462249},
  {bundleName: 'build/static/js/20.18a663a8.chunk.js', totalBytes: 7731},
  {bundleName: 'build/static/js/21.86a31928.chunk.js', totalBytes: 1305513},
  {bundleName: 'build/static/js/22.81a35a2a.chunk.js', totalBytes: 2322059},
  {bundleName: 'build/static/js/3.467ebdfa.chunk.js', totalBytes: 23830},
  {bundleName: 'build/static/js/4.999d5c4d.chunk.js', totalBytes: 18652},
  {bundleName: 'build/static/js/5.bdc07627.chunk.js', totalBytes: 20898},
  {
    bundleName: 'build/static/js/Blacklists.8c8cba4a.chunk.js',
    totalBytes: 19846
  },
  {bundleName: 'build/static/js/Dashboard.7325f5b9.chunk.js', totalBytes: 2471},
  {bundleName: 'build/static/js/Lists.a36e93b0.chunk.js', totalBytes: 83717},
  {
    bundleName: 'build/static/js/RiskProfiles.fea165ed.chunk.js',
    totalBytes: 37011
  },
  {bundleName: 'build/static/js/Routing.7c45834a.chunk.js', totalBytes: 458179},
  {bundleName: 'build/static/js/Rules.96f39fe6.chunk.js', totalBytes: 130538},
  {
    bundleName: 'build/static/js/RulesEditor.3a591892.chunk.js',
    totalBytes: 8486
  },
  {
    bundleName: 'build/static/js/SankeyContainer.d1d0f7df.chunk.js',
    totalBytes: 20410
  },
  {bundleName: 'build/static/js/main.afc988a7.chunk.js', totalBytes: 49926},
  {bundleName: 'build/static/js/runtime-main.58c93740.js', totalBytes: 2802},
  {bundleName: 'build/static/js/xlsx.5db1611f.chunk.js', totalBytes: 225}
]

describe('generate Table', () => {
  it('should generate a table with the right amount of row and headers', () => {
    console.log(generateTable(baseData, baseData))
  })
})
