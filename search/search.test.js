const linearSearch = require("./linearSearch");
const binarySearch = require("./binarySearch");
const { describe, test, expect } = require("@jest/globals");

describe("Search algorithms", () => {
  test("Linear search returns index of target value in list", () => {
    const targetIndex = linearSearch([2,6,7,90,103], 90);
    expect(targetIndex).toBe(3);
  });
  
  test("Binary search - returns index of target value in list", () => {
    const targetIndex = binarySearch([2,8,10,13,37,44,50,70], 10);
    expect(targetIndex).toBe(2);
  });
  
  test("Binary search - returns -1 if value is not found in list", () => {
    const targetIndex = binarySearch([1, 2, 3, 5], 7);
    expect(targetIndex).toBe(-1);
  });
});
