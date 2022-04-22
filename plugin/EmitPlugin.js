// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = class AfterEmitPlugin {
  apply(compiler) {
    // afterEmit 不能获取 stats.source() ， 只能获取到 stats.size()
    compiler.hooks.emit.tap('AfterEmitPlugin', (compilation) => {
      let assets = compilation.assets
      Object.entries(assets).forEach(([filename, stats]) => {
        console.log(filename)
        if (filename.indexOf('.html') > -1) {
          // fs.writeFileSync(path.join(__dirname, './aaa.html'), stats.source())
        }
      })
    })
  }
}
