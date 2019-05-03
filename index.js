var animal = 'dog'

function myAnimal() {
  return animal
}


function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
 var animal = 'cat'
  return animal
}

yourAnimal();

function add2(n) {
  return n+2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
funkyFunction();
var temp = funkyFunction();
var theFunk = temp();