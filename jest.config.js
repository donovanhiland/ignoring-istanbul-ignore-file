module.exports = {
  globals: {
    "ts-jest": {
      useBabelrc: true
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/ignored.{ts,js}",
    "**/notIgnored.{ts,js}",
    "!**/node_modules/**"
  ],
  cacheDirectory: ".jest/cache"
};
