/* Two-Dimensional Arrays.

1. Create a program that uses a two-dimensional array to hold songs and artists.

2. Then displays the playlist of each song and the artist who recorded it.

3. Print a list of song names and the artist for each song in the playlist.

*/


var playlist = [
  ['Mother', 'Danzig'],
  ['September', 'St Lucia'],
  ['Midnight City', 'M83'],
  ['Party Lites', 'Slave']
];

function print(message) {
  document.write(message);
}

function printSongs(songs) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i+=1 ) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playlist);

// 1. Mother by Danzig
// 2. September by St Lucia
// 3. Midnight City by M83
// 4. Party Lites by Slave