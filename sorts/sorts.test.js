const { describe, expect, test } = require("@jest/globals");
const insertionSort = require("./insertionSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");

describe("sorting tests", () => {
  test("insertion sort works", () => {
    expect(insertionSort([55, 43, 11, -7, 1])).toEqual([-7, 1, 11, 43, 55]);
  });

  test("merge sort works", () => {
    expect(mergeSort([55, 43, 11, -7, 1])).toEqual([-7, 1, 11, 43, 55]);
  });

  test("quick sort works", () => {
    expect(quickSort([9, 6, 2, 3, 7, 1])).toEqual([ 1, 2, 3, 6, 7, 9 ]);
  });
});