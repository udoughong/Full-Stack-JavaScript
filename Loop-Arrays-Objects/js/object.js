var person = {
  name: 'Kenny Loggins',
  country: 'USA',
  age: 65,
  awesomePerformer: true,
  talents: ['Yacht Rock', 'Soundtracks', 'Smoothness']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello, my name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
message += '<p>I am ' + person.age + ' years old.</p>';
person.name = 'Skunk Baxter';
person.age += -30;
message += '<p>But, I wish my name was ' + person.name + ' and I was ' + person.age + ' years old.</p>';
message += '<p>I have ' + person.talents.length + ' main talents, ';
message += person.talents.join(', ') + '.</p>';
print(message);

// Hello, my name is Kenny Loggins.
// I live in the USA.
// I am 65 years old.
// But, I wish my name was Skunk Baxter and I was 35 years old.
// I have 3 main talents, Yacht Rock, Soundtracks, Smoothness.