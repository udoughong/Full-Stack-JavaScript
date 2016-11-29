// Problem: Nav menu is not responsive for mobile.
// Solution: Create a bootstrap-like navigation.

// Create a select and append to #menu.
var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links - http://api.jquery.com/category/traversing/
$("#menu a").each(function(){
  var $anchor = $(this);

  // Create an option.
  var $option = $("<option></option>");

  // Highlight backgrounds of selected options (depending on current page).
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }

  // Option's value is the href.
  $option.val($anchor.attr("href"));

  // Option's text is the text of the link.
  $option.text($anchor.text());

  // Append option to select.
  $select.append($option);
});

// Bind a change listener to select.
$select.change(function(){
  // Go to the select's location.
  window.location = $select.val();
});