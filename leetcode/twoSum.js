function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (current + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

module.exports = twoSum;
