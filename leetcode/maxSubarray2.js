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

module.exports = maxSubArray;
