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

function flatten2(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten2(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

module.exports = {
  flatten,
  flatten2,
};
