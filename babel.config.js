module.exports = {
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
