// Problem: When user clicks on an image, goes to a dead end.
// Solution: Create an overlay with the large image - lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

// Add image to overlay.
$overlay.append($image);

// Add caption to overlay.
$overlay.append($caption);

// Add the overlay.
$("body").append($overlay);


// Capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  // Prevent user from going to the deadend.
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update the overlay with the linked image.
  $image.attr("src", imageLocation);
  // Get child's alt atribute and set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  // Show the overlay.
  $overlay.show();
});

// When overlay is clicked.
$overlay.click(function(){
  // Hide the overlay.
  $(this).hide();
});
