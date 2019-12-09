module.exports = {
  plugins: ['jest'],
  root: true,
  env: {
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
