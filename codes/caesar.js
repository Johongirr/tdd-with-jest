const isPositive = (num) => num > 0;

const cipherPositiveLetters = (str, shift) => {
  let ciphered = "";
  for (const char of str) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      ciphered += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      ciphered += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      ciphered += char;
    }
  }
  return ciphered;
};
const cipherNegativeLetters = (str, shift) => {
  let ciphered = "";
  for (const char of str) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      ciphered += String.fromCharCode(((charCode - 90 + shift) % 26) + 90);
    } else if (charCode >= 97 && charCode <= 122) {
      ciphered += String.fromCharCode(((charCode - 122 + shift) % 26) + 122);
    } else {
      ciphered += char;
    }
  }
  return ciphered;
};

const caesar = (str, shift) => {
  if (shift === 0) return str;
  return isPositive(shift)
    ? cipherPositiveLetters(str, shift)
    : cipherNegativeLetters(str, shift);
};
//
export { caesar };

// ((charCode - 122 + shift) % 26) + 122)
