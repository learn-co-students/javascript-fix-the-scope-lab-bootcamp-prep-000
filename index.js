var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal;
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

// We want to set variable theFunk equal to "FUNKY!" using our other variable funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();

