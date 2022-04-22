/* eslint-disable @typescript-eslint/no-var-requires */
const jszip = require('jszip')

module.exports = class ZipPlugin {
  apply(compiler) {
    // afterEmit 不能获取 stats.source() ， 只能获取到 stats.size()
    compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
      let assets = compilation.assets
      var zip = new jszip()

      Object.entries(assets).forEach(([filename, stats]) => {
        zip.file(filename, stats.source())
      })

      zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
        assets['test.zip'] = {
          source() {
            return content
          },
          size() {
            return content.length
          }
        }
        callback(null, compilation)
      })
    })
  }
}
