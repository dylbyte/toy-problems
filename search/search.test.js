const linearSearch = require("./linearSearch");
const { test, expect } = require("@jest/globals");

test("linear search - returns index of target value in list", () => {
  const targetIndex = linearSearch([2,6,7,90,103], 90);
  expect(targetIndex).toBe(3);
});

