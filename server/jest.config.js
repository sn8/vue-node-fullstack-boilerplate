const path = require('path')

module.exports = {
  testEnvironment: 'node',
  cache: false,
  forceExit: true,
  rootDir: path.resolve(__dirname),
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.(js|ts)',
    '**/__tests__/*.(js|ts)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
