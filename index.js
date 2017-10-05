var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below'

  //solution: create a shadow variable animal assigned to the string cat
  var animal = "cat"

  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

  //solution: move the const variable declaration before the return statement
  //const two = 2; declaration was originally here, and anything after the semicolon was added
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
theFunk = theFunk();
