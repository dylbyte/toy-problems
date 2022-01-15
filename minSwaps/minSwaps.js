function minSwaps(array) {
  
  return 0;
}

// nums = [0,1,0,1,1,0,0]
function isSolved(nums) {
  // is circular
  if (nums[0] === 1 && (nums[nums.length - 1] === 1)) {
    // circular
    let foundGap = nums[0] === 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === 0 && nums[i - 1] === 1 && foundGap) return false;
    }
  }

  // not circular
  let foundSequence = nums[0] === 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1 && nums[i - 1] === 0 && foundSequence) return false;    
  }
}

module.exports = minSwaps;