var person = {
  name: 'Kenny Loggins',
  country: 'USA',
  age: 65,
  awesomePerformer: true,
  skills: ['Yacht Rock', 'Soundtracks', 'Smoothness']
};

for ( var potato in person ) {
  console.log(potato);
}

// name
// country
// age
// awesomePerformer
// skills