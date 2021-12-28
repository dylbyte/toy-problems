// O(logn) time 
// O(logn) space - recursive calls adds frames to callstack
function helper(tree, target, closest) {
  if (!tree || !tree.value) return closest;
  
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return helper(tree.left, target, closest);
  } else if (target > tree.value) {
    return helper(tree.right, target, closest);
  } else { // tree.value === target
    return closest;
  }
}

function findClosestValueInBst2(tree, target) {
  return helper(tree, target, tree.value);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = { findClosestValueInBst2, BST };