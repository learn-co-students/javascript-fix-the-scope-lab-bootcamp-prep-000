var myanimal = 'dog'
var uranimal = 'cat'

function myAnimal() {
  return myanimal
}

function yourAnimal() {
  return uranimal
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
