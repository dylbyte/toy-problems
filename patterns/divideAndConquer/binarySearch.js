// O(logn) T
const search = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const guess = arr[middle];
    if (guess === target) return middle;
    else if (guess < target) min = middle + 1;
    else max = middle - 1;
  }
  return -1;
};

module.exports = search;
