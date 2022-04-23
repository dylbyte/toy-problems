// O(n) time | O(1) space
const firstAndLast = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let start = i;
      while (i + 1 < nums.length && nums[i + 1] === target) {
        i += 1;
      }
      return [start, i];
    }
  }
  return [-1, -1];
};

module.exports = firstAndLast;
