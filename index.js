function myAnimal() {
  let animal = 'dog'
  return animal
}

function yourAnimal() {
  let animal = 'cat'
  return animal
}

function add2(n) {
  return parseFloat(n) + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our function
// funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
