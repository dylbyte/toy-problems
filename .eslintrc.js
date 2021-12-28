module.exports = {
  env: {
    // browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-param-reassign": 2,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "quotes": 1
  }
}