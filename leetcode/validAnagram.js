/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const validAnagram = (s, t) => {
  const sCounts = {};
  const tCounts = {};

  // iterate over s/t, store each char and number of occurrences as { [char]: count }
  for (let i = 0; i < s.length; i++) {
    sCounts[s[i]] = (sCounts[s[i]] || 0) + 1;
    tCounts[t[i]] = (tCounts[t[i]] || 0) + 1;
    // s[i] in sCounts ? sCounts[s[i]]++ : (sCounts[s[i]] = 1);
    // t[i] in tCounts ? tCounts[t[i]]++ : (tCounts[t[i]] = 1);
  }

  for (const char of tCounts) {
    if (!s[char] || s[char] !== tCounts[char]) return false;
  }
  return true;
};

const validAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;
  const counts = {};
  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (const char of t) {
    if (!counts[char]) return false;
    counts[char] -= 1;
  }
  return true;
};

const validAnagram3 = (s, t) => {
  if (s.length !== t.length) return false;

  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  for (let i = 0; i < s.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }
  return true;
};

module.exports = {
  validAnagram,
  validAnagram2,
  validAnagram3,
};
