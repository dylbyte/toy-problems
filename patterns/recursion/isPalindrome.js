function isPalindrome(str) {
  if (str.length <= 1) return true;

  const lastIdx = str.length - 1;
  if (str[0] !== str[lastIdx]) return false;
  return isPalindrome(str.slice(1, lastIdx));
}

function isPalindrome2(str) {
  if (str.length <= 1) return true;
  if (str[0] === str.slice(-1)) {
    return isPalindrome2(str.slice(1, -1));
  }
  return false;
}

module.exports = { isPalindrome, isPalindrome2 };
