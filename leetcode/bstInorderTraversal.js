/* 
Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/
const inorderTraversal = (root) => {
  const stack = [];
  const result = [];
  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

module.exports = inorderTraversal;
