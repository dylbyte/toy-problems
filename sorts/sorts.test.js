const { describe, expect, test } = require("@jest/globals");
const insertionSort = require("./insertionSort");
const mergeSort = require("./mergeSort");

describe("sorting tests", () => {
  test("insertion sort works", () => {
    expect(insertionSort([55, 43, 11, -7, 1])).toEqual([-7, 1, 11, 43, 55]);
  });

  test("merge sort works", () => {
    expect(mergeSort([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]));
  });
});