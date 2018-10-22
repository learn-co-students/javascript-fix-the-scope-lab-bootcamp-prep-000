var animal = 'dog'

function myAnimal() {
  return animal
}
myAnimal()

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
    var animal = "cat"
    return animal
}
yourAnimal()


function add2(n) {
  return n + 2
}
//technically can move const two = 2 ahead and use 'two' instead.

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction(function())

//The IDE keeps glitching ._.
