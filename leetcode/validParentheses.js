/*
 ** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 ** An input string is valid if:
 **  Open brackets must be closed by the same type of brackets.
 **  Open brackets must be closed in the correct order.
 */

const isValid = (s) => {
  // ()[]{}
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (const char of s) {
    if (char in bracketMap) {
      const last = stack.pop();
      if (last !== bracketMap[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
