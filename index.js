var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

function funkyFunction() {
  return function theFunk() {
    var theFunk = "FUNKY!";

  }
}

var theFunk = funkyFunction()

theFunk();


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
