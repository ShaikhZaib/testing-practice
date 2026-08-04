export default function caesarCipher(str, shift) {
  // Init new result string
  let result = "";

  // for checking overflow (more than 26 chars)
  shift %= 26;

  // for every charcater check
  for (const char of str) {
    // If it is not a letter add it as it is
    if (!isLetter(char)) {
      result += char;
      continue;
    }
    // If it is a letter shift it
    result += shiftChar(char, shift);
  }

  return result;
}

function isLetter(char) {
  // Get the char code for comparison
  const code = char.charCodeAt(0);

  // Check if it is a charcter
  if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
    return true;
  }

  return false;
}

function isUpperCase(char) {
  // Get the char code for comparison
  const code = char.charCodeAt(0);

  // check if it is uppercase
  if (code > 64 && code < 91) {
    return true;
  }

  return false;
}

function shiftChar(char, shift) {
  // Get the char code
  let code = char.charCodeAt(0);

  // Calculate base for
  let base = 97;
  if (isUpperCase(char)) base = 65;

  // Convert to 0-25
  code -= base;

  // add the shift
  code += shift;

  // Check for overflow
  code %= 26;

  // Convert back to the char
  code += base;

  return String.fromCharCode(code);
}
