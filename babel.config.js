module.exports = {
  presets: [
    [
      '@babel/preset-env',{
        useBuiltIns: 'usage',
        corejs: 3
      },
    ],
    // https://babeljs.io/docs/en/babel-preset-typescript
    // '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    '@babel/plugin-proposal-class-properties'
    // ['@babel/plugin-transform-runtime', {
    //   corejs: 3
    // }]
  ]
}
