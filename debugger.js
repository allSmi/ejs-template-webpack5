// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const cli = {
  name: 'webpack-cli',
  package: 'webpack-cli',
  binName: 'webpack-cli',
  // installed: isInstalled('webpack-cli'),
  url: 'https://github.com/webpack/webpack-cli'
}

const pkgPath = require.resolve(`${cli.package}/package.json`)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(pkgPath)
require(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName]))
