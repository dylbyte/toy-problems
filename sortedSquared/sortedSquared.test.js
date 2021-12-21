const { expect, test } = require('@jest/globals');
const sortedSquared = require('./sortedSquared');
const sortedSquared2 = require('./sortedSquared2');

test('square each value and return in ascending order', () => {
  const squares = sortedSquared([1, 2, 3, 5, 6, 8, 9]);
  expect(squares).toEqual([1, 4, 9, 25, 36, 64, 81]);
});

test('square each value and return sorted in ascending order: \ninput: [-1, -1, 2, 3, 3, 3, 4]', () => {
  const squares = sortedSquared([-1, -1, 2, 3, 3, 3, 4]);
  expect(squares).toEqual([1, 1, 4, 9, 9, 9, 16]);
});

test('test nlogn squaresArray', () => {
  const squares = sortedSquared2([-1, -1, 2, 3, 3, 3, 4]);
  expect(squares).toEqual([1, 1, 4, 9, 9, 9, 16]);
});
