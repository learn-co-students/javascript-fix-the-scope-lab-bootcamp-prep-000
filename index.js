var animal = 'dog'
const two = 2;
var n;

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal
}

function add2(n) {
  return n + two;

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

// Jeff says:
// This works in other code sandboxes. Why am I still getting an error?
var theFunk = funkyFunction();

//