module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.(spec|test).[jt]s?(x)',
  ],
  rootDir: "./",
  moduleNameMapper: {
    "#/(.*)$": "<rootDir>/test/$1",
    "@CONSTANTS": ["<rootDir>/src/CONSTANTS/index.ts"],
    "@CONSTANTS/(.*)$": ["<rootDir>/src/CONSTANTS/$1"],
    "@stores/(.*)$": ["<rootDir>/src/stores/$1"],
    "#types": ["<rootDir>/src/types/index.ts"],
    "#types/(.*)$": ["<rootDir>/src/types/$1"],
    "@lib/(.*)$": ["<rootDir>/src/lib/$1"]
  },
};
