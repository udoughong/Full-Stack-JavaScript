/* 
Guessing a random number.

1. Generate a random number from 1 to 10000. This is the number the computer needs to guess

2. Enter a while loop. - Inside this loop the computer will guess a random number.  If the number the computer guesses matches the random number the loop ends.  If not the loop continues.

3. Exit the loop and print the random number and the number of times it took for the computer to guess the random number.
*/

// Set the variables.
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attemps = 0;

// Declare the function.
// Function is called once to set the randomNumber variable.
// Function is called many times to attempt a guess.
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// Run the loop while the condition is false.
// When the codition is true, the loop ends.
while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attemps += 1;
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attemps + " attempts to find the random number.</p>")