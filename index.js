var animal = 'dog'

function myAnimal() {
  var myAnimal = 'dog';
  return myAnimal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat';
  return animal;
}

function add2(n) {
  return n + 2;

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunky = funkyFunction();
var theFunk = theFunky();
myAnimal();
yourAnimal();