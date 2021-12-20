const { test, expect } = require('@jest/globals');
const validSubsequence = require('./validSubsequence');

test('validate subsequence of an array', () => {
  const isValid = validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
  expect(isValid).toBeTruthy();
})