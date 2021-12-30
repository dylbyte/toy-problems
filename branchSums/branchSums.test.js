const { branchSums, BinaryTree } = require("./branchSums");
const { test, expect } = require("@jest/globals");

test("insert method of binary tree", () => {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const output = branchSums(tree);
  expect(output).toEqual([15, 16, 18, 10, 11]);
});