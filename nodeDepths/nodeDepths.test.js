const BinaryTree = require("../BST/BinaryTree");
const nodeDepths = require("./nodeDepths");
const nodeDepths2 = require("./nodeDepths2");
const { expect, test } = require("@jest/globals");

const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);

test("Recursively find the sum of the node depths in binary tree", () => {
  const sum = nodeDepths(root);
  expect(sum).toEqual(16);
});

test("Iteratively find the sum of the node depths in binary tree", () => {
  const sum = nodeDepths2(root);
  expect(sum).toEqual(16);
});