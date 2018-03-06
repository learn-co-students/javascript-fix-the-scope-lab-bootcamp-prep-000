var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

const two = 2;
function add2(n) {
  return n + two

  // Feel free to move things around!
  
}

function funkyFunction() {
  return function funkyFunction() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();