var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return `${animal}`;
}

function add2(n) {
  const two = 2
  return n + two
}

add2(4);

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = "FUNKY!"

