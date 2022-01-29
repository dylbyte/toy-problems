const { describe, expect, test } = require("@jest/globals");
const insertionSort = require("./insertionSort");

describe("sorting tests", () => {
  test("insertion sort - returns input array sorted", () => {
    expect(insertionSort([55, 43, 11, -7, 1])).toEqual([-7, 1, 11, 43, 55]);
  });
});