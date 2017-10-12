var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2
  return n + two;
}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var myScope = funkyFunction();
var theFunk = myScope();

//var theFunk = funkyFunction()();
