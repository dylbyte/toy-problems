const minSwaps = require("./minSwaps");
const { expect, test } = require("@jest/globals");

const input1 = [0,1,0,1,1,0,0]; // binary circular array
// [0,0,1,1,1,0,0] using 1 swap

const input2 = [0,1,1,1,0,0,1,1,0];
// [1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).

const input3 = [1,1,0,0,1];
// already grouped bc circular

test("return the minimum number of swaps required to group all 1's", () => {
  expect(minSwaps(input1)).toBe(1);
});

test("min number of swaps when multiple swaps are required for grouping", () => {
  expect(minSwaps(input2)).toBe(2);
});

test("return 0 if input is already grouped by number", () => {
  expect(minSwaps(input3)).toBe(0);
});
