var animal = 'dog'
var animal2 = ''
function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  animal2 = 'cat'
  return animal2
}

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
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var funky = funkyFunction()
var theFunk = funky()
