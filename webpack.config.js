const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const path = require('path')

// const mode = 'production'
const mode = 'development'


module.exports = {
  mode,
  entry: './src/main.ts',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'template'), // 配置模版目录，才能监听到模版的变化
    },
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          // chunks 有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunk
          chunks: 'initial',
          priority: 100,
          reuseExistingChunk: false,
          test: /[\\/]node_modules[\\/]/
        },
      }
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist/'), // 绝对路径
    // clean: true, // 在webpack-dev-serve运行环境下，不要配置clean:true，具体查看 src/main.js 顶部记录
    publicPath: '/'
  },
  resolve:{
    extensions: ['.ts', '.js']
  },
  externals: {
    'jquery': '$'
  },
  plugins: [
    // 定义的属性值可以在 HtmlWebpackPlugin的模版中 以及 js 中使用
    // 模版中 <%= __MODE__ %>
    // js中 直接 var a = __MODE__
    new webpack.DefinePlugin({
      __MODE__: `"${mode}"`,
      'process.env.NODE_ENV': `"${mode}"`
    }),
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index.template.ejs',
      templateParameters: {
        // <%= __MODE1__ %>
        __MODE1__: '666' // 如果 webpack.DefinePlugin 中设置了同名属性，webpack.DefinePlugin中的优先级更高
      },
      // base: 'https://example.com', // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base
      // inject: 'body',
      title: 'ejs-template',
      'meta': {
        'theme-color': '#4285f4'
        // Will generate: <meta name="theme-color" content="#4285f4">
      }
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      // https://webpack.docschina.org/loaders/html-loader/#templating
      {
        test: /\.ejs$/i,
        use: [{
          loader: 'ejs-loader',
          options: {
            esModule: false,
          },
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        // ---------------
        // 记录一：排除html中引入的图片路径,
        // 因为html-loader已经处理了（其实是webpack5使用了asset modules处理了图片，如果不排除，又使用url-loader重复处理（这两者处理顺序有待查证），所有会导致出错），具体还要查看原因

        // exclude: /template\/imgs\/(.)+$/i,

        // 记录二：找到原因了，由于webpack5内部实现了asset modules (https://webpack.docschina.org/guides/asset-modules/#root)
        // 注：资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。
        // 所以在使用url-loader file-loader 时需要增加 type: 'javascript/auto' 选项，
        // 并且 url-loader 增加 esModule: false
        // ---------------
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]',
              limit: 8192,
              publicPath: '/',
              esModule: false
            },
          },
        ],
        // webpack5 新增
        type: 'javascript/auto' //https://webpack.docschina.org/guides/asset-modules/#root
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(tsx?)$/i,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.(js)$/i,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
        ]
      },
    ],
  },

}
