/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */
const invert = (root) => {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

module.exports = invert;
