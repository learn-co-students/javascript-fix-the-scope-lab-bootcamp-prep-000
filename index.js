var animal = "dog";

function myAnimal() {
  return animal
}

myAnimal(animal);

function yourAnimal(animal) {
 animal = "cat";
  return animal;
}

yourAnimal();

function add2(n) {
  var two = 2
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
