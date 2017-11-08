var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  // ANSWER: WE "SHADOW" THE GLOBAL VARIABLE
  var animal = 'cat'
  return animal
}

function add2(n) {
  // ANSWER: CONST TWO NEEDS TO BE DECLARED HERE AT THE TOP
  const two = 2
  return n + two

  // Feel free to move things around!
  // NOT DOWN HERE
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
