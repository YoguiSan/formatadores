/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.{js,jsx}',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 10,
    },
  },
  setupFiles: ['mock-local-storage'],
  setupFilesAfterEnv: ['./setup-jest.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  verbose: true,
  testResultsProcessor: 'jest-sonar-reporter',
};
