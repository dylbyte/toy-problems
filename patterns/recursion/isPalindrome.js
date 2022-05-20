function isPalindrome(str) {
  if (str.length <= 1) return true;

  const lastIdx = str.length - 1;
  if (str[0] !== str[lastIdx]) return false;
  return isPalindrome(str.slice(1, lastIdx));
}

module.exports = isPalindrome;
