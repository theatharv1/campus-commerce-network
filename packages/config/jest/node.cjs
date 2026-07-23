/**
 * Shared Jest base for framework-agnostic TypeScript packages
 * (@ccn/types, @ccn/core, @ccn/api-client). CommonJS test runtime via ts-jest.
 */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: { module: 'CommonJS', verbatimModuleSyntax: false },
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!@ccn/)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  restoreMocks: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/index.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  passWithNoTests: true,
};
