const { test, expect } = require('@jest/globals');
const twoNumberSum = require('./twoNumberSum');
const twoNumberSum2 = require('./twoNumberSum2');
const twoNumberSum3 = require('./twoNumberSum3');

test('Two Number Sum O(n2)', () => {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(output.length).toEqual(2);
  expect(output).toEqual([11, -1]);
});

test('Two Number Sum O(n)', () => {
  const output = twoNumberSum2([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163);
  expect(output.length).toEqual(2);
  expect(output).toEqual([210, -47]);
})

test('Two Number Sum O(nlogn)', () => {
  const output = twoNumberSum3([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163);
  expect(output.length).toEqual(2);
  expect(output).toEqual([-47, 210]);
})