/* 
  Accepts a string and returns the length of the longest substring with all distinct characters.
*/

// O(n^2) T | O(n) S - Brute force
const findLongestSubstring = (str) => {
  let maxLen = 0;
  let len = 0;
  const seen = new Map();
  if (!str) return 0;
  for (let i = 0; i < str.length; i++) {
    seen.clear();
    len = 0;
    for (let j = i; j < str.length; j++) {
      const char = str[j];
      if (!seen.has(char)) {
        seen.set(char, j);
        len++;
        maxLen = Math.max(len, maxLen);
      } else {
        break;
      }
    }
  }
  return maxLen;
};

// O(n) T | O(n) S - Sliding window
const findLongestSubstring2 = (str) => {
  const charSet = new Set();
  let l = 0;
  let res = 0;

  for (let r = 0; r < str.length; r++) {
    const char = str[r];
    while (charSet.has(char)) {
      // update window
      charSet.delete(str[l]);
      l += 1;
    }
    charSet.add(char);
    res = Math.max(res, r - l + 1);
  }
  return res;
};

module.exports = {
  findLongestSubstring,
  findLongestSubstring2,
};
