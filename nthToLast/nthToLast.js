function nthToLast(node, n) {
  // initialize pointers
  let current = node;
  let follower = node;

  for (let i = 0; i < n; i++) {
    if (current === null) return null;
    current = current.next;
  }

  while (current.next !== null) {
    current = current.next;
    follower = follower.next;
  }

  return follower;
}

module.exports = nthToLast;