/* Star Wars Spoilers

Goals: 
Prevent spoilerphobes from seeing spoilers.
Hide spoilers and reveal them through user interaction.

*/

// 1. Hide spoiler.
$(".spoiler span").hide();
// 2. Add a button.
  // http://api.jquery.com/category/manipulation/
  // http://api.jquery.com/append/
$(".spoiler").append("<button>Reveal Spoiler!</button>");
// 3. When button is pressed...
  // http://api.jquery.com/category/events/mouse-events/
  // http://api.jquery.com/click/
$("button").click(function(){
  // 3.1 Show the spoiler next to the button clicked.
    // http://api.jquery.com/category/traversing/
    // http://api.jquery.com/prev/
  $(this).prev().show();
  // 3.2 Hide the button that was clicked.
    // http://api.jquery.com/category/manipulation/dom-removal/
    // http://api.jquery.com/remove/
  $(this).remove();
});