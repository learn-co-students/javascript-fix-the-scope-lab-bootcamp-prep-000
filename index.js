var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  
  var animal = 'cat'
  //could also have just "thisAnimal = cat" then return thisAnimal
  return animal
}

function add2(n) {

  const two = 2
  
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
