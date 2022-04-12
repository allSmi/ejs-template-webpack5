module.exports = {
  presets: [
    [
      '@babel/preset-env',{
        useBuiltIns: 'usage',
        corejs: 3
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
    // ['@babel/plugin-transform-runtime', {
    //   corejs: 3
    // }]
  ]
}
