function flatten(arr) {
  if (!arr) return [];

  const flattened = [];

  const helper = (items) => {
    if (!items) return;
    if (Array.isArray(items)) {
      items.forEach((item) => {
        if (Array.isArray(item)) {
          helper(item);
        } else {
          flattened.push(item);
        }
      });
    }
  };
  helper(arr);
  return flattened;
}

module.exports = flatten;
