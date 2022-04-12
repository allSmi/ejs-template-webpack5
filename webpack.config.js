const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const ejs = require('ejs')

// const mode = 'production'
const mode = 'development'


module.exports = {
  mode,
  entry: './src/main.js',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'template'), // 配置模版目录，才能监听到模版的变化
    },
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist/'), // 绝对路径
    // clean: true, // 在webpack-dev-serve运行环境下，不要配置clean:true，具体查看 src/main.js 顶部记录
    publicPath: '/'
  },
  externals: {
    'jquery': '$'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index.template.ejs',
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      // https://webpack.docschina.org/loaders/html-loader/#templating
      {
        test: /\.ejs$/i,
        use: [{
          loader: 'html-loader',
          options: {
            preprocessor: (content, loaderContext) => {
              console.log('-----------ejs 开始编译---------');

              let result

              // var resourcePath = loaderContext.resourcePath;
              // 需要将依赖的ejs文件加入到loaderContext中，
              // 这样在webpack-dev-server运行时每次修改ejs文件才会重新编译自动刷新
              loaderContext.addDependency(path.resolve(__dirname, 'template/index.template.ejs'))
              loaderContext.addDependency(path.resolve(__dirname, 'template/header.ejs'))
              loaderContext.addDependency(path.resolve(__dirname, 'template/header_sub.ejs'))

              try {
                result = ejs.render(
                  content,
                  {
                    MODE: mode,
                  },
                  {
                    filename: path.resolve(
                      __dirname,
                      './template/index.template.ejs'
                    ),
                  }
                )
              } catch (error) {
                loaderContext.emitError(error)

                return content
              }
              // console.log(result);
              return result
            },
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
      // {
      //   test: /\.(js)$/i,
      //   use: [
      //     'babel-loader'
      //   ],
      // },
    ],
  },

}
