var animal = 'dog'

function myAnimal() {
  return animal;
}

myAnimal()

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

yourAnimal()

function add2(n) {
  const two = 2;
  return n + two;
}

add2(2)

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

function funkyFunction() {
  var innerVariable = "FUNKY!"
  return function innerScope() {
    return innerVariable;
  }
}

var theFunk = funkyFunction()()
