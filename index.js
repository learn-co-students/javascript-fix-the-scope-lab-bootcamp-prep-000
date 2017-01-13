var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
const two = 2
  return n + two
}

var funkyFunction = function() {
  return function inner() {
    return "FUNKY!"
  }
  inner();
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = function()
