/* given a sorted array of integers, return two elements that sum to 0, or else return undefined */

// naive O(n^2) T
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
};

// O(n) T
const sumZero2 = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] === 0) return [arr[l], arr[r]];
    else if (arr[l] + arr[r] < 0) l++;
    else r--;
  }
  return undefined;
};

module.exports = {
  sumZero,
  sumZero2,
};
