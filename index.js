var animal = 'dog'

function myAnimal(animal1) {
  return animal
}

function yourAnimal(animal2) {
  // How can we make sure that this function
  // and the above function both pass?
  var animal2 = 'cat'
  return animal2
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
    var innerFunction = 'FUNKY!'
  return function() {
    return innerFunction;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
