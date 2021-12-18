const twoNumberSum = require('./twoNumberSum');

test('sum of two numbers in array = targetsum', () => {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(output.length).toEqual(2);
  expect(output).toEqual([11, -1]);
});