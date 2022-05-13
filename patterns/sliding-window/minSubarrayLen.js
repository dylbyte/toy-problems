/* 
  Accepts two parameters: an array of positive integers and a positive integer.

  Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed in.
  
  Should return 0 if no such array exists.
*/

// O(n^2) T | O(1) S - Brute force approach
const minSubarrayLen = (nums, target) => {
  let minLen = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    let len = 1;
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      len += 1;
      if (sum >= target) {
        minLen = Math.min(minLen, len);
        break;
      }
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

module.exports = {
  minSubarrayLen,
};
