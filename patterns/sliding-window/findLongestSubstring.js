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

module.exports = findLongestSubstring;
