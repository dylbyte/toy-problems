const branchSums = require("./branchSums");
const BinaryTree = require("../BST/BinaryTree");
const { test, expect } = require("@jest/globals");

test("handles tree with multiple nodes", () => {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const output = branchSums(tree);
  expect(output).toEqual([15, 16, 18, 10, 11]);
});

test("handles tree with just a single node", () => {
  const tree = new BinaryTree(1);
  const output = branchSums(tree);
  expect(output).toEqual([1]);
})