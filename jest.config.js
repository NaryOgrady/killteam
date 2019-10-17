module.exports = {
  verbose: true,
  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '\\.spec\\.js',
  setupFiles: [
    '<rootDir>/test/jest-pretest.js'
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    'aurelia-(.*)': '<rootDir>/node_modules/aurelia-$1'
  }
};
