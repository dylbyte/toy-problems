const { test, expect } = require("@jest/globals");
const minMoves = require("./minMoves");

test("returns the minimum number of moves to reach target", () => {
  expect(minMoves(19, 2)).toBe(7);
  expect(minMoves(10, 4)).toBe(4);
});