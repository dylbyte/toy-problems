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

// O(n) T | sliding window approach
const maxSum2 = (nums, n) => {
  if (nums.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  // handles first n values
  for (let i = 0; i < n; i++) {
    maxSum += nums[i];
  }

  tempSum = maxSum;

  // handles remainder of the array
  for (let i = n; i < nums.length; i++) {
    // subtract old window start, add new window end
    tempSum = tempSum - nums[i - n] + nums[i]; // sliding the window
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

module.exports = {
  maxSum,
  maxSum2,
};
