/* Quiz Program

1. Ask a series of questions.

2. Evaluate each answer.

3. Keep track of the number of questions answered correctly.

4. After all the questions are answered...

  4.1 Display the number of questions that were correctly answered, and the number that the player got wrong.

  4.2 Report which questions they answered correctly and which they got wrong.

*/

var questions = [
  ['When did Chelsea last win the English Premier League?', 2015],
  ['When did Chelsea last win the UEFA Champions League?', 2012],
  ['How many National Championships have the Nebraska Cornhuskers won?', 5],
  ['How many books make up the "Song of Ice and Fire" Series?', 5]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1 ) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for ( var i = 0; i < questions.length; i += 1 ) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if ( response === answer ) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = 'You got ' + correctAnswers + ' question(s) right.';
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);