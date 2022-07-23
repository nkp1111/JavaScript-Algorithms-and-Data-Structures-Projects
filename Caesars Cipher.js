/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let strArr = str.split("");
  for (let i =0; i<strArr.length;i++) {
    if (strArr[i].match(/[A-M]/)) {
      strArr[i] = String.fromCharCode(strArr[i].charCodeAt(0) + 13);
    }
    else if (strArr[i].match(/[N-Z]/)) {
      strArr[i] = String.fromCharCode(strArr[i].charCodeAt(0) - 13);
    }
  }
    
  return strArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
