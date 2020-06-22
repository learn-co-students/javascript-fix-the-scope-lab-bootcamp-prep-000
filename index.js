var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return parseInt(n) + 2
}

function funkyFunction() {
  return function inner() {
    return "FUNKY!"
  }
}

var funkFunk = funkyFunction()

var theFunk = funkFunk()

theFunk
 