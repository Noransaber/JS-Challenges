//  Letters
let letters = "abcdefghijklmnopqrstuvwxyz";

// convert letters to array
let lettersArr = Array.from(letters);

// Get letters container
let lettersContainer = document.querySelector(".letters");

lettersArr.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // create letter text node
  let theLetter = document.createTextNode(letter);

  // Append the letter to span
  span.appendChild(theLetter);

  // add class to span
  span.className = "letter-box";

  // append span to container
  lettersContainer.appendChild(span);
});

// Object words and category
let words = {
  programming: ["PHP", "PYTHON", "JS", "JAVA", "C#", "C++"],
  movies: [
    "rampage",
    "King Kong",
    "The ring",
    "Sherlok",
    "the guest",
    "SkyScrapter",
  ],
  people: ["Benedict", "The Rock", "Morgan", "Selfister", "Farid"],
  countries: ["Egypt", "Syria", "Spain", "Germen", "Indonesia"],
};

// Get Keys
let allKeys = Object.keys(words);
// Random numbers
let randomNumberOfKeys = Math.floor(Math.random() * allKeys.length);

//  => lead us to random property
let randomProp = allKeys[randomNumberOfKeys];

// => lead us to random Values
let randomPropValue = words[randomProp];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueVal = randomPropValue[randomValueNumber];

// Set Category info
document.querySelector(".game-info .category span").innerHTML = randomProp;

// Guess letter div
let guessLetterContainer = document.querySelector(".letter-guess");

// convert chosen word to an array
let LettersAndSpaces = Array.from(randomValueVal);

// foreach letter we want to create a span for it
LettersAndSpaces.forEach((letter) => {
  // create empty span for each letter
  let emptySpan = document.createElement("span");

  // if the letter is space
  if (LettersAndSpaces === " ") {
    // Add class
    emptySpan.className = "has-space";
  }

  // Append Spans to guessLetterContainer
  guessLetterContainer.appendChild(emptySpan);
});

// Get spans
let guessSpans = document.querySelectorAll(".letter-guess span");

// Set Wrong Attempts
let WrongAttempts = 0;

// Get the draw
let theDraw = document.querySelector(".hangman-draw");

// handel clicked on letters
document.addEventListener("click", (e) => {
  // Set status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    // console.log("clicked");
    e.target.classList.add("clicked");

    // Get the clicked letter
    let clickedLetter = e.target.innerHTML.toLowerCase();

    // Get the chosen word
    let theChosenWord = Array.from(randomValueVal.toLowerCase());

    // Loop on word letter to check
    theChosenWord.forEach((wordLetter, wordIndex) => {
      // check if the chosen letter equal any of the words letters
      if (clickedLetter == wordLetter) {
        // make status true
        theStatus = true;
        // loop on spans
        guessSpans.forEach((span, spanIndex) => {
          if (spanIndex === wordIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    // if the letter is wrong
    if (theStatus != true) {
      // increase the wrong attempts
      WrongAttempts++;

      // add class wrong to the draw
      theDraw.classList.add(`wrong-${WrongAttempts}`);
    }
    // play fail sound

    if (WrongAttempts === 8) {
      endGame();
      lettersContainer.classList.add("finished");
    }
  }
});

function endGame() {
  // create div
  let div = document.createElement("div");

  // Create text Node
  let divTxt = document.createTextNode(
    `Game Over, the word is ${randomValueVal}`
  );

  // Append the txt to the div
  div.appendChild(divTxt);

  // Add ClassName
  div.className = "PopUp";

  // Append to the body
  document.body.appendChild(div);
}

/**
 * The Logic
 * on event click, when we clicked on a letter
 * 1- add class name = clicked
 * then select it bt css and edit it => to change its color then can't be clicked again
 * then store the clicked letter in a variable
 * store the chosen word in a variable too
 * make foreach loop on chosen word to compare between tit and the chosen letter
 * loop by the letter and the index
 * if the letters the same we will loop again on spans which carry this letters
 * if the span index = to the word index thats meant it is the right letter
 * so we will write in inside the span
 */
