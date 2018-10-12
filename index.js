var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat'
  return animal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function funkyFunction() {
  return function funkyFunction() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()