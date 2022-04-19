module.exports = function (api) {
  let env = api.env()
  // console.log('---env---', env)

  if (env === 'test') {
    // 执行jest测试 env === 'test'
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ],
        '@babel/preset-typescript' // 对ts支持
      ]
      // plugins: ['transform-es2015-modules-commonjs']
    }
  } else {
    return {
      presets: [
        // https://babeljs.io/docs/en/babel-preset-typescript
        // '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 3,
            modules: false // 确保没有编译器将您的 ES2015 模块语法转换为 CommonJS 的
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true
          }
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime'
      ]
    }
  }
}
