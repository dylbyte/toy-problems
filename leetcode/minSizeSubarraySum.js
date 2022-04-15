/* 
  Given an array of positive integers nums and a positive integer target, 
  return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
  of which the sum is greater than or equal to target. 

  If there is no such subarray, return 0 instead. 
*/

// sliding window
const minSizeSubarraySum = (targetSum, arr) => {
  let minWindowSize = Number.MAX_SAFE_INTEGER;
  let currentWindowSum = 0;
  let windowStart = 0; // left side of window

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];

    while (currentWindowSum >= targetSum) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minWindowSize;
};

module.exports = minSizeSubarraySum;
