function isPalindrome(str, first = true) {
  if (first) str = str.replace(/[^a-zA-Z0-9]/g, "");

  if (str.length <= 1) return true;
  if (str[0].toLowerCase() === str.slice(-1).toLowerCase()) {
    return isPalindrome(str.slice(1, -1), false);
  }
  return false;
}

module.exports = isPalindrome;
