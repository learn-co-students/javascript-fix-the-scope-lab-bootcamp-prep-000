var animal = 'dog'

function myAnimal() {
  return animal
}
function yourAnimal() {
  var animal = "cat";
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var theFunk = "FUNKY!";
var funkyFunction = function() {
  return function() {
    return theFunk;
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
funkyFunction();
