var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
// The hint is unclear. a better to explain the "()" as "argument accessors" and since in order to access the argument within a function one level deep how do we access it if its two levels deep? 
// answer "()()"
var theFunk = funkyFunction()();

