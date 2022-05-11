/* 
  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the target average.

  Returns a boolean.

  Constraints: O(n) T | O(1) S
*/
const averagePair = (nums, targetAvg) => {
  // assign 2 pointers
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const avg = (nums[i] + nums[j]) / 2;
    if (avg === targetAvg) return true;
    else if (avg < targetAvg) i++;
    else j--;
  }
  return false;
};
