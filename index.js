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

  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()
var theFunk = theFunk()
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
