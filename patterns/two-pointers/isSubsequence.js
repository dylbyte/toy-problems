/* 
  Takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string (without their order changing).

  Returns a boolean.
  Constraints: O(n + m) T | O(1) S
*/
const isSubsequence = (s1, s2) => {
  if (!s1) return true;
  let i = 0;
  let j = 0;

  while (j < s2.length) {
    if (s2[j] === s1[i]) i++;
    if (i === s1.length) return true;
    j++;
  }
  return false;
};

// Recursive
const isSubsequence2 = (s1, s2) => {
  if (s1.length === 0) return true;
  if (s2.length === 0) return false;
  if (s2[0] === s1[0]) return isSubsequence2(s1.slice(1), s2.slice(1));
  return isSubsequence2(s1, s2.slice(1));
};

module.exports = {
  isSubsequence,
  isSubsequence2,
};
