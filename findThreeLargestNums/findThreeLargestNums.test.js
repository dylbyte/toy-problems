const findThreeLargestNums = require("./findThreeLargestNums");
const { describe, expect, test } = require("@jest/globals");

describe("find three largest numbers in an array", () => {
  test("return three largest of positive and negative integers array", () => {
    expect(findThreeLargestNums([55, 43, 11, 3, -3, 10])).toEqual([11, 43, 55]);
  });

  test("return three largest of negative integers array with duplicates", () => {
    expect(findThreeLargestNums([-3, -7, -17, -27, -7, -541, -8, -7])).toEqual([-7, -7, -3]);
  });
});