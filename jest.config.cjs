/** @type {import('ts-jest').JestConfigWithTsJest} */

const path = require('path');

module.exports = {
  moduleNameMapper: {
    '^~/(.*)$': path.join(__dirname, 'src', '$1'),
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.globals.ts'],
  testEnvironment: 'jsdom',
};
