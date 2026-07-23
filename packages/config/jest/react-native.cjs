/**
 * Shared Jest base for React Native surfaces (@ccn/ui, apps/mobile).
 * ACTIVATED in the Mobile App Foundation milestone once expo, react-native,
 * jest-expo, and @testing-library/react-native are installed.
 */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@ccn/.*|react-navigation|@react-navigation/.*)/)',
  ],
  clearMocks: true,
  restoreMocks: true,
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  passWithNoTests: true,
};
