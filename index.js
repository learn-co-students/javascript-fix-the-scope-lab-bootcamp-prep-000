var animal = 'dog'

function myAnimal() {
  return animal
  animal = 'cat'
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}

var theFunk = "FUNKY!"
var funkyFunction = function() {
  return function innerFunc() {
    return theFunk;

  }
}
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that
