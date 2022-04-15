// sliding window
const maxSumSubarray = (arr, k) => {
  let max = -Infinity;
  let currentRunningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i];

    if (i >= k - 1) {
      // window size k
      max = Math.max(max, currentRunningSum);
      currentRunningSum -= arr[i - (k - 1)];
    }
  }
  return max;
};

module.exports = maxSumSubarray;
