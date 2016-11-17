function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
 
var counter = 0; 
while ( counter < 10 ) {
  var randNumber = randomNumber(6);
  document.write(randNumber + " ");
  counter += 1;
}