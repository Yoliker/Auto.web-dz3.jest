/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**jest.config.js**',
    ],
    coverageThreshold: {
        branches: 100,
        functions: 100,
        lines: 100
    }
};
  
module.exports = config;