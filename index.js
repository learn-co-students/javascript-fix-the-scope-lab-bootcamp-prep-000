function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

myAnimal();

yourAnimal();


function add2(n) {
  const two = 2;
  return n + two;
}

add2(373);


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()

var theFunk = theFunk();




