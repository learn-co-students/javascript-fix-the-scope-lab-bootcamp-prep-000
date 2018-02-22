function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
var animal = 'cat'
  return animal
}

 const two = 2
 
function add2(n) {
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
