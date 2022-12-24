function findTheMissingLetterIN(givenLetter) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let start = alpha.indexOf(givenLetter[0]);
  let end = alpha.lastIndexOf(givenLetter);
  for (let i = 0; i < givenLetter.length; i++) {
    if (givenLetter[i] != alpha[start + i]) {
      return alpha[start + i];
    }
  }

  return "No Missing Letter In Sequence";
}
console.log(findTheMissingLetterIN("defgi")); // h
console.log(findTheMissingLetterIN("abcdeghi")); // f
console.log(findTheMissingLetterIN("xyz")); // No Missing Letter In Sequence
