import reverseString from "../src/reverseString.js";

test("check if reverses the string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("works on single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("works on empty string", () => {
  expect(reverseString("")).toBe("");
});

test("works on anagram", () => {
  expect(reverseString("level")).toBe("level");
});
