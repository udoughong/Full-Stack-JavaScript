var person = {
  name: 'Kenny Loggins',
  country: 'USA',
  age: 65,
  awesomePerformer: true,
  skills: ['Yacht Rock', 'Soundtracks', 'Smoothness']
};

for ( banana in person ) {
  console.log(banana, ': ', person[banana]);
}

// name :  Kenny Loggins
// country :  USA
// age :  65
// awesomePerformer :  true
// skills :  ["Yacht Rock", "Soundtracks", "Smoothness"]

for ( potato in person ) {
  console.log(potato, ': ', person["country"]);
}

// name :  USA
// country :  USA
// age :  USA
// awesomePerformer :  USA
// skills :  USA