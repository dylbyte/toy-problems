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
    if (sum >= target) return 1;
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
const minSubarrayLen2 = (nums, target) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesnt add up to the given target, move window to right
    if (total < target && end < nums.length) {
      total += nums[end];
      end++;
    }

    // if current window adds up to at least the target given, shrink window
    else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }

    // current total is less than required target but we've reached the end
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

// O(n) T | O(1) S - alt. sliding window approach
const minSubarrayLen3 = (nums, target) => {
  let minLen = Number.MAX_SAFE_INTEGER;
  let l = 0;
  let sum = 0;
  // left pointer & right pointer define window
  // find smallest window that sums to target or greater
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      minLen = Math.min(minLen, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

module.exports = {
  minSubarrayLen,
  minSubarrayLen2,
  minSubarrayLen3,
};
