/* 
  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
const maxDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const maxDepthBFS = (root) => {
  const queue = [root];
  let level = 0;
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level += 1;
  }
  return level;
};

const maxDepthDFS = (root) => {
  const stack = [[root, 1]];
  let result = 0;

  while (stack.length) {
    const [node, depth] = stack.pop();
    if (node) {
      result = Math.max(result, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return result;
};

module.exports = maxDepth;
