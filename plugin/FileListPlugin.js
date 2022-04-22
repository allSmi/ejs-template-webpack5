module.exports = class FileListPlugin {
  constructor(filename) {
    this.filename = filename
  }
  apply(compiler) {
    // 文件准备好了，要进行发射了
    // compiler.hooks.emit
    // DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
    // No more changes should happen to Compilation.assets after sealing the Compilation.
    // Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
    // Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
    compiler.hooks.compilation.tap('FileListPlugin', (compilation) => {
      compilation.hooks.afterOptimizeAssets.tap('FileListPlugin', () => {
        let assets = compilation.assets
        // console.log(assets)
        let content = `## 文件名    资源大小\n`
        Object.entries(assets).forEach(([filename, stats]) => {
          content += `- ${filename}    ${stats.size()}\n`
          // console.log(stats.source())
        })

        assets[this.filename] = {
          source() {
            return content
          },
          size() {
            return content.length
          }
        }
      })
    })
  }
}
