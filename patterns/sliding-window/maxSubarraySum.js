// O(n^2) T | naive approach
const maxSum = (nums, n) => {
  if (n > nums.length) return null;

  let max = -Infinity;

  for (let i = 0; i < nums.length - n + 1; i++) {
    let temp = 0; // store sum
    for (let j = 0; j < n; j++) {
      temp += nums[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

module.exports = {
  maxSum,
};
