class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

// 1 -> 2 -> 3 -> 4-> 5 -> null
// nthToLast(n = 2)?

const linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(3);
linkedList.next.next.next = new Node(4);

console.log(nthToLast(linkedList, 2));

