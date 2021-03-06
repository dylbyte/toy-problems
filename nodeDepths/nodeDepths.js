function nodeDepths(root, depth = 0) {
  if (!root) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

module.exports = nodeDepths;