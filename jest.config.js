const baseConfig = require('./jest.config.base')
// e2e 테스트 포함
baseConfig.projects.push({
  displayName: 'e2e-test',
  maxWorkers: 1,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.e2e.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/apps/*/src/**/__tests__/*.e2e.ts'],
  testTimeout: 60_000,
  transformIgnorePatterns: ['/node_modules/'],
})

module.exports = baseConfig
