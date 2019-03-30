var animal = 'dog'

function myAnimal() {
    return animal
}

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal='cat'
  return animal
}

function add2(n) {
var two=2;
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


var temp;
var theFunk;
temp=funkyFunction();
theFunk=temp();


//https://learn.co/tracks/bootcamp-prep/javascript-fundamentals/functions-and-scope/fix-the-scope-lab#