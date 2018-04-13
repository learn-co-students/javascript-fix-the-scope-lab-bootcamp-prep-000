var animal = 'cat'

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) { //Done! Don't change this one anymore!
  const two = 2
  return n + two



}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()() //need to research why adding another '()' was needed
