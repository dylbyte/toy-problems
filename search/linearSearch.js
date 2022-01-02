function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }
  return -1;
}

module.exports = linearSearch;