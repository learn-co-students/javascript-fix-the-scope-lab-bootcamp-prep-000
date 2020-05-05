var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal;
}

function add2(n) {
  return parseInt(n) + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function a() {
  return function b() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
funkyFunction;
var theFunk = funkyFunction()();