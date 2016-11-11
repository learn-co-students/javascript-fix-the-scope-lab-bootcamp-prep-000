var animal = 'dog'

function myAnimal() {  // return dog
  return animal
}

function yourAnimal() {    // return cat
  var animal = 'cat'
  return animal
}

function add2(n) {
  var two = 2
  return n + two
}

var theFunk = "FUNKY!"

var funkyFunction = function() {
  return function() {
  return theFunk
  }
}
// We want this to return a function that returns "FUNKY!"
