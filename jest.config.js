/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.test.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/__test__/**",
    "!**/*.stories.tsx",
    "!**/*.d.ts",
  ],
  setupFiles: ["<rootDir>/src/setupTests.ts", "react-app-polyfill/jsdom"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(gif|jpg|jpeg|png|svg)$": "jest-transform-stub",
    "\\.svg$": "config/jest/svgMock.js",
  },
  transform: {
    "^.+\\.s?css$": "config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "config/jest/fileTransform.js",
  },
};

module.exports = config;
