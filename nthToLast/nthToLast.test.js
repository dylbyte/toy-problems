const { expect, test } = require("@jest/globals");
const nthToLast = require("./nthToLast");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new Node(1); // 1 -> null
linkedList.next = new Node(2); // 1 -> 2 -> null
linkedList.next.next = new Node(3); // 1 -> 2 -> 3 -> null
linkedList.next.next.next = new Node(4); // 1 -> 2 -> 3 -> 4 -> null
linkedList.next.next.next.next = new Node(5); // (1 ->)(2 ->)(3 ->)(4->)(5 ->) null

test("return nth to last node in list, where n is specified as an argument", () => {
  const expected = linkedList.next.next;
  const result = nthToLast(linkedList, 2);
  
  expect(result).toEqual(expected);
});