var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function add2(n) {
  return n += 2
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()();

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.