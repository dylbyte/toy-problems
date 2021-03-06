const linearSearch = require("./linearSearch");
const binarySearch = require("./binarySearch");
const { breadthFirst1, breadthFirst2 } = require("./breadthFirst");
const Node = require("./Node");
const { describe, test, expect } = require("@jest/globals");

const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

test("Linear search returns index of target value in list", () => {
  const targetIndex = linearSearch([2,6,7,90,103], 90);
  expect(targetIndex).toBe(3);
});

describe("Binary search", () => {
  test("Returns index of target value in list", () => {
    const targetIndex = binarySearch([2,8,10,13,37,44,50,70], 10);
    expect(targetIndex).toBe(2);
  });
  
  test("Returns -1 if value is not found in list", () => {
    const targetIndex = binarySearch([1, 2, 3, 5], 7);
    expect(targetIndex).toBe(-1);
  });
});

describe("Node class", () => {
  test("Depth first search method returns a list of all the node values in the graph", () => {
    expect(graph.depthFirstSearch([])).toEqual(["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]);
  });
});

describe("Breadth first search", () => {
  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };

  const expected = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  test("Iterative solution returns nodes in nearest order", () => {
    expect(breadthFirst1([tree], [])).toEqual(expected);
  });
  test("Recursive solution returns nodes in nearest order", () => {
    expect(breadthFirst2([tree], [])).toEqual(expected);
  });
});
