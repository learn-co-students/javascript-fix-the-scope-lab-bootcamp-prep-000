var animal = '';

function myAnimal() {
  animal = 'dog';
  return animal
}

function yourAnimal() {
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return parseInt(n, 10) + two

  // Feel free to move things around!

}

var funkyFunction = function() { //funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()();
theFunk;
