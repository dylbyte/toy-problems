const removeDuplicatesFromLL = require("./removeDuplicatesFromLL");
const LinkedList = require("./LinkedList.js");
const { test, expect } = require("@jest/globals");

const list1 = new LinkedList(1);
list1.addMany([1, 3, 4, 4, 4, 5, 6, 6]);

test("Removing duplicates from LinkedList", () => {
  const expected = new LinkedList(1).addMany([3, 4, 5, 6]);
  const actual = removeDuplicatesFromLL(list1);

  expect(actual.getNodesInArray()).toEqual(expected.getNodesInArray());
});