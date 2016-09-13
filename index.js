var animal = 'dog'

function myAnimal() {
  animal = 'dog'
  return animal
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

yourAnimal();

function add2(n) {
  const two = 2
  return n + two
}

  var funkyFunction = function() {
    return function() {
      return"FUNKY!"
    }
  }
  var theFunk = funkyFunction()();

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
