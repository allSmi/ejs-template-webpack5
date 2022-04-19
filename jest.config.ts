// Note: babel-jest is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the transform configuration option:

module.exports = {
  // preset: 'ts-jest',
  // testMatch: ['<rootDir>/tests/**/*.(spec|test).ts?(x)'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).(js|ts)']
  // transform: {
  //   // 将.js后缀的文件使用babel-jest处理
  //   '^.+.js$': 'babel-jest',
  //   '^.+.(ts|tsx)$': 'babel-jest' // ts-jest ??
  // },
  // // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/(?!(lodash-es|other-es-lib))'
  // ]
}
