const diameterOfTree = (root) => {
  let res = [0];
  const dfs = (root) => {
    if (!root) return -1;
    const left = dfs(root.left);
    const right = dfs(root.right);
    res[0] = Math.max(res[0], 2 + left + right);

    return 1 + Math.max(left, right);
  };
  dfs(root);
  return res[0];
};

module.exports = diameterOfTree;
