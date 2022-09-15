// for wallaby runtime
// e2e 테스트 제외
module.exports = {
  cacheDirectory: './.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{ts,tsx}',
    '<rootDir>/apps/*/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/*.stories.{ts,tsx}',
    '!<rootDir>/**/__tests__/*.{ts,tsx}',
    '!<rootDir>/**/__stories__/*.{ts,tsx}',
    '!<rootDir>/**/__mocks__/*.{ts,tsx}',
    '!<rootDir>/**/types/**/*.{ts,tsx}',
  ],

  // maxWorkers: '70%',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue', 'json'],

  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/file.mock.ts',
    '\\.svg$': '<rootDir>/__mocks__/svg.mock.ts',
    quasar: 'quasar/dist/quasar.esm.prod',
  },
  projects: [
    {
      displayName: 'unit-test',
      globals: {
        __DEV__: true,
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.unit.ts'],

      testEnvironment: '@happy-dom/jest-environment',
      testMatch: [
        '!<rootDir>/**/*.e2e.ts',
        '<rootDir>/packages/*/src/**/__tests__/*.spec.{ts,tsx}',
        '<rootDir>/apps/*/src/**/__tests__/*.spec.{ts,tsx}',
      ],
      transformIgnorePatterns: ['/node_modules/'],
    },
  ],

  snapshotSerializers: [],

  testEnvironment: '@happy-dom/jest-environment',

  testEnvironmentOptions: {
    // https://github.com/facebook/jest/issues/6766
    url: 'http://localhost/',
  },

  testPathIgnorePatterns: [
    '\\.snap$',
    '/node_modules/',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.d.ts$',
  ],

  transform: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': require.resolve('babel-jest'),
  },

  transformIgnorePatterns: ['/node_modules/'],
}
