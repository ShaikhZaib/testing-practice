import { add, sub, mul, div } from "../src/calculator.js";

test("add works", () => {
  expect(add(4, 6)).toBe(10);
});

test("add works with negative numbers", () => {
  expect(add(-4, 6)).toBe(2);
});

test("subtract works", () => {
  expect(sub(6, 4)).toBe(2);
});

test("subtract works with negative numbers", () => {
  expect(sub(4, 6)).toBe(-2);
});

test("multiply works", () => {
  expect(mul(4, 5)).toBe(20);
});

test("multiply works with zero", () => {
  expect(mul(203, 0)).toBe(0);
});

test("division works", () => {
  expect(div(4, 2)).toBe(2);
});

test("division works with decimal values", () => {
  expect(div(5, 2)).toBe(2.5);
});
