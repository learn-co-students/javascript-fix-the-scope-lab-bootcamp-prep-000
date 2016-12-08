var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat'

  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
}

var theFunk = "FUNKY!"
var funkyFunction = function() {
  return function() {
    return funkyFunction()
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
