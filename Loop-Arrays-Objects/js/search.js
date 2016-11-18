/* Important note 
The behavior of most browsers will wait until the loop finishes and then they print to the window. So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.

Sorry for the bug */

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true) {
  search = prompt("Search for a product. Type 'list' to show all products and 'quit' to exit.");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(inStock.join(', '));
  } else {
    if ( inStock.indexOf(search) > -1 ) {
      print('Yes, we have ' + search + ' in stock.');
    } else {
      print('Sorry, ' + search + ' is not in stock.');
    }
  }
}