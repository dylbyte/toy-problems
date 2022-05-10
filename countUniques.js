/* given a sorted array of integers, return the number of unique values in the array */

const countUniques = (arr) => {
  const counts = {};
  for (const val of arr) {
    if (!counts[val]) counts[val] = 1;
  }
  return Object.keys(counts).length;
};

// O(n) T | O(1) S
const countUniques2 = (arr) => {
  if (!arr.length) return 0;

  let i = 0;
  let j = 1;
  while (j < arr.length) {
    while (arr[i] === arr[j]) j++;
    i++;
    arr[i] = arr[j];
    j++;
  }
  return i + 1;
};

// O(n) T | O(1) S
const countUniques3 = (arr) => {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
};

module.exports = {
  countUniques,
  countUniques2,
  countUniques3,
};
