const { describe, expect, test } = require("@jest/globals");
const binarySearch = require("./binarySearch");
const binarySearch2 = require("./binarySearch2");

describe.skip("Iterative binary search", () => {
  test("it returns the index of the target in the given array", () => {
    expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toEqual(3);
  });

  test("it returns -1 when the target is not found in the given array", () => {
    expect(binarySearch([1, 5, 23, 111], 35)).toEqual(-1);
  });
});

describe("Recursive binary search", () => {
  test("it returns the index of the target in the given array", () => {
    expect(binarySearch2([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toEqual(3);
  });

  test("it returns -1 when the target is not found in the given array", () => {
    expect(binarySearch2([1, 5, 23, 111], 35)).toEqual(-1);
  });
});