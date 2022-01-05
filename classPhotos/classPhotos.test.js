const classPhotos = require("./classPhotos");
const { describe, test, expect } = require("@jest/globals");

describe("Optimal arrangement for a class photo", () => {
  test("Determine whether or not the photo can be taken", () => {
    expect(classPhotos([5, 8, 1, 3, 4],[6, 9, 2, 4, 5])).toBeTruthy;
  });
});