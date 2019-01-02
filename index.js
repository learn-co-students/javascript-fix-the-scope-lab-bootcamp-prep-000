var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

// not started yet

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return theFunk = function() {
    return "FUNKY!"
  }
  theFunk()
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
