module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
    'import/no-unresolved': 'off',
    'no-console': 'error', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'error', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};


// overrides: [{
//   files: ['*.test.js', '*.mock.js'],
//   rules: {
//     'no-undef': 0,
//   },
// }],
// parserOptions: {
//   ecmaVersion: 2018,
// },
// rules: {
//   'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
//   'import/no-unresolved': 'off',
//   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
// },
// settings: {
//   'import/resolver': {
//     'babel-module': {
//       configFile: './babelrc.js',
//       root: ['../src'],
//     },
//   },
// },
