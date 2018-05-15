var animal = 'dog'
const two = 2

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

function add2(n) {
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"
// the hints are too vague and the lesson prior to this does not properly prepare users for being able to execute a function from within a function. Only how to call a variable from within a function, which doesn't work at all in reverse. Even the most intense googling doesn't result in an answer that works in the designated line of code