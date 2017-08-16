var animal = 'dog'
var Animal2 = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return Animal2
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return theFunk
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = "FUNKY!"
