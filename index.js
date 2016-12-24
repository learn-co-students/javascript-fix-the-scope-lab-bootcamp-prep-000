var animal = 'cat'

function myAnimal() {
  return animal = 'dog'
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal = 'cat'
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
