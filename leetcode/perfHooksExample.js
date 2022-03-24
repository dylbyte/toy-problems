const { performance } = require("perf_hooks"); //Timing library
const { setSolution, objectSolution } = require("./containsDuplicate");

function runTest(testFunction, testArray) {
  console.log("   Running test:", testFunction.name);
  let start = performance.now();
  testFunction(testArray);
  let end = performance.now();
  console.log("      Duration:", end - start);
}

let arr = [];
let setSize = 1000;
for (var i = 0; i < setSize; i++) {
  arr.push(i);
}
console.log("Set size:", setSize);
runTest(setSolution, arr);
runTest(objectSolution, arr);
