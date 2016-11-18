var playlist = [
  'Mother', 
  'She Rides', 
  'Twist of Cain', 
  '13'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i+=1 ) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playlist);

// 1. Mother
// 2. She Rides
// 3. Twist of Cain
// 4. 13