/** @type {import('ts-jest').JestConfigWithTsJest} */

const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^~/(.*)$': path.join(__dirname, 'src', '$1'),
  },
};
