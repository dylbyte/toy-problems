// O(n) time | O(n) space
function branchSums(root) {
  return calculateBranchSums(root, 0, []);
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return sums;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return sums;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
  return sums;
}

module.exports = branchSums;