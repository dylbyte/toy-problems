// O(n^2) Time
const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
    currentSum = 0;
  }
  return maxSum;
};

// O(n) Time
const maxSubArray2 = (nums) => {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

module.exports = {
  maxSubArray,
  maxSubArray2,
};
