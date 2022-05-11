function areThereDuplicates(...args) {
  args.sort();
  let i = 0;
  let j = 1;
  while (j < args.length) {
    if (args[i] === args[j]) return true;
    i++;
    j++;
  }
  return false;
}

module.exports = areThereDuplicates;
