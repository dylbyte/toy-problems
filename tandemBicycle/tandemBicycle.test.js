const tandemBicycle = require("./tandemBicycle");
const { test, expect } = require("@jest/globals");

const team1Speeds = [5, 5, 3, 9, 2];
const team2Speeds = [3, 6, 7, 2, 1];

test("returns maximum possible speed of all tandem pairs", () => {
  const maxSpeed = tandemBicycle(team1Speeds, team2Speeds, true);
  expect(maxSpeed).toBe(32);
});

test("returns minimum possible speed of all tandem pairs", () => {
  const minSpeed = tandemBicycle(team1Speeds, team2Speeds, false);
  expect(minSpeed).toBe(25);
});