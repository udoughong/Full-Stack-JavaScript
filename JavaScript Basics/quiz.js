/*
Challenge Instructions

1. Ask at least five questions

2. Keep track of the number of questions the user answered correctly

3. Provide a final message after the quiz letting the user know the number of questions he or she got right.

4. Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

// quiz begins, no answers correct
var correct = 0;

var q1 = prompt("Who won the 2012 Eufa Champions League?");
if ( q1.toUpperCase() === "CHELSEA" ) {
  alert( "Correct!");
  correct += 1;
} else {
  alert( "Wrong!");
}
alert(correct + " of 5 correct thus far");

var q2 = prompt("Who won the 1986 Super Bowl?");
if ( q2.toUpperCase() === "CHICAGO" || q2.toUpperCase() === "BEARS" || q2.toUpperCase() === "CHICAGO BEARS" ) {
  alert( "Correct!");
  correct += 1;
} else {
  alert( "Wrong!");
}
alert(correct + " of 5 correct thus far");

var q3 = prompt("Who won the 1995 College Football National Championship?");
if ( q3.toUpperCase() === "NEBRASKA" ) {
  alert( "Correct!");
  correct += 1;
} else {
  alert( "Wrong!");
}
alert(correct + " of 5 correct thus far");

var q4 = prompt("Who won the 2016 NBA Finals?");
if ( q4.toUpperCase() === "CLEVELAND" ) {
  alert( "Correct!");
  correct += 1;
} else {
  alert( "Wrong!");
}
alert(correct + " of 5 correct thus far");

var q5 = prompt("Who won the 2016 World Series?");
if ( q5.toUpperCase() === "CHICAGO CUBS" || q5.toUpperCase() === "CUBS" ) {
  alert( "Correct!");
  correct += 1;
} else {
  alert( "Wrong!");
}
alert(correct + " of 5 correct!");

// Final message and rank.
if ( correct === 5) {
  document.write("<p>You won the gold crown!</p>");
} else if ( correct >= 3) {
  document.write("<p>You won the silver crown!</p>");
} else if ( correct >= 1) {
  document.write("<p>You won the bronze crown!</p>");
} else {
  document.write("<p>You win nothing!</p>");
}