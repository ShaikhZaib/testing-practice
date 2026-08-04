import caesarCipher from "../src/caesarCipher.js";

test("caesarCipher works", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher works on upper and lower case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher works on symbols", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesarCipher works on more than 26 numbers", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});
