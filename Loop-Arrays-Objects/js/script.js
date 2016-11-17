/* 
Guess the number using a do...while loop

1. The computer sets a random number between 1 and 10.

2. The user is prompted guess the random number.

3. If the user guesses incorrectly, prompt the user to guess again.  Otherwise, end the loop and display the number of attempts it took to guess correctly and the random number originally set by the computer. 
*/

// Set the variables.
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // aka a 'Flag'

// Declare a function that returns a random number.
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt("Guess a number between 1 and 10");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  } 
} while ( ! correctGuess )
document.write("<p>You guessed the correct number: " + randomNumber + " after " + guessCount + " guesses</p>");