module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(ts)$": "ts-jest",
    "^.+\\.(js)$": "babel-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
