module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
