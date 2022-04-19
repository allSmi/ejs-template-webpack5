module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   // parser: '@babel/eslint-parser', // 解析器
  //   parser: '@typescript-eslint/parser',
  //   // tsconfigRootDir: __dirname,
  //   // project: ['./tsconfig.json']
  //   // sourceType: 'module',
  //   // ecmaVersion: 12
  // },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/vue3-recommended', // plugin-vue
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/recommended',
    // 'prettier'
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended' // plugin-prettier
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error'
  }
}
