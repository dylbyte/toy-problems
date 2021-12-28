function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  let node = tree;
  while (node && node.value) {
    if (node.value === target) return node.value;

    let diff = Math.abs(target - node.value);
    if (diff < Math.abs(target - closest)) closest = node.value;

    if (node.value > target) {
      node = node.left;
    } else if (node.value < target) {
      node = node.right;
    }
  }
  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = { findClosestValueInBst, BST };