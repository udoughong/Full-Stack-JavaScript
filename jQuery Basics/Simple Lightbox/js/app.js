// Problem: When user clicks on an image, goes to a dead end.
// Solution: Create an overlay with the large image - lightbox.

var $overlay = $('<div id="overlay"></div>');
// Add the overlay.
$("body").append($overlay);
  // An image.
  // A caption.

// Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  // Prevent user from going to the deadend.
  // http://api.jquery.com/category/events/
  // http://api.jquery.com/event.preventDefault/
  event.preventDefault();
  // Check the console for href string
  // http://api.jquery.com/category/attributes/
  // http://api.jquery.com/attr/
  var href = $(this).attr("href");
  console.log(href);
  // Show the overlay.
  $overlay.show();
  // Update the overlay with the linked image.
  // Get child's alt atribute and set caption.  
});


// When overlay is clicked.
  // Hide the overlay.