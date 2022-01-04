function breadthFirst1(queue, array) { // queue initially contains [root]
  while (queue.length > 0) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return array;
}

function breadthFirst2(queue, array) {
  if (!queue.length) return array;
  
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirst2(queue, array);
}

module.exports = { breadthFirst1, breadthFirst2 };