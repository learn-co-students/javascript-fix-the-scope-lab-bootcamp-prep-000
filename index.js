function myAnimal() {
  var myAnimal = 'dog'
  return myAnimal
}

function yourAnimal() {
  var yourAnimal = 'cat'
  return yourAnimal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()




