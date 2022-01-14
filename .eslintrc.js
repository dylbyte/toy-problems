module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-param-reassign": 1,
    "no-plusplus": [0, { allowForLoopAfterthoughts: true }],
    "quotes": 1,
    "semi": 1,
    "no-multi-spaces": 1,
  }
};