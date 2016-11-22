/* Student Record Search Challenge

Overview: Create a script that creates a bunch of student records, then prints those records to a webpage.  Use Loops, Arrays, and Objects.

1. Create a data structure to hold information about a group of students.
  1.1 This should be an array named students.
  1.2 The array will hold a list of objects.
  1.3 Each object will represent a student and should have the following properties:
    1.3.1 Name
    1.3.2 Track (like iOS, Web Design, or Front End Development)
    1.3.3 Achievements (should hold a number value)
    1.3.4 Points (number of points the student has earned)
  1.4 Create at least five student objects.
  1.5 Make this a seperate file 'students.js'

2. Prompt the user to search by student names and print out the students' name, track, points, and achievements.

3. Type 'quit' to end the program.

*/

var message = ''; // Holds a string of HTML that will build up in a loop.
var student;  // Holds a student object each time the loop runs.
var search; // Holds the user's search request.

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}

while (true) {
  search = prompt('Search student records: type a name [Boaty McBoatface], (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name === search) {
      message = getStudentReport(student);
      print(message);
    }
  }
}