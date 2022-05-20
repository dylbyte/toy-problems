function reverse(str) {
  if (str.length <= 1) return str;

  const lastIdx = str.length - 1;
  // alt: return reverse(str.slice(1)) + str[0]
  return str[lastIdx] + reverse(str.slice(0, lastIdx));
}

module.exports = reverse;
