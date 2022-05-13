/* 
  Accepts two parameters: an array of positive integers and a positive integer.

  Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed in.
  
  Should return 0 if no such array exists.
*/

// O(n^2) T | O(1) S - Brute force approach
const minSubarrayLen = (nums, target) => {
  let minLen = Number.MAX_SAFE_INTEGER;
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
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

// O(n) T | O(1) S - sliding window approach
const minSubarrayLen2 = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesnt add up to the given sum, move window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }

    // if current window adds up to at least the sum given, shrink window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }

    // current total is less than required sum but we've reached the end
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

module.exports = {
  minSubarrayLen,
  minSubarrayLen2,
};
