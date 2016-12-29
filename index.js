var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  // Added (var animal = 'cat') inside the function yourAnimal()
  // and called youAnimal(); afterwards
  var animal = 'cat';
  return animal
}
yourAnimal();

// Moved 'const two = 2 above 'return n + 2' because 'return' ends all code
// following it afterwards
function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
// Adding '()' calls/excutes a function. Adding another '()' afterwards calls a function
// within a function (nested function), since var funkyFunction = a function that returns another function
var theFunk = funkyFunction()()
