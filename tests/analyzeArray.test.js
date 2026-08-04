import analyzeArray from "../src/analyzeArray.js";

test("Check if analyzeArray works", () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(data)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
