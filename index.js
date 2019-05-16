const two = 2
var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

function add2(n) {
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()()