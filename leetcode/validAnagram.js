/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const validAnagram = (s, t) => {
  const sCounts = {};
  const tCounts = {};

  // iterate over s/2, store each char and number of occurrences as { [char]: count }
  for (let i = 0; i < s.length; i++) {
    s[i] in sCounts ? sCounts[s[i]]++ : (sCounts[s[i]] = 1);
    t[i] in tCounts ? tCounts[t[i]]++ : (tCounts[t[i]] = 1);
  }

  for (const char of tCounts) {
    if (!s[char] || s[char] !== tCounts[char]) return false;
  }
  return true;
};

module.exports = validAnagram;
