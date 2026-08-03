import capitalize from "../src/capitalize.js";

test("capitalizes the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("works on capital character", () => {
  expect(capitalize("Odin")).toBe("Odin");
});

test("works on single character", () => {
  expect(capitalize("a")).toBe("A");
});

test("works on empty string", () => {
  expect(capitalize("")).toBe("");
});
