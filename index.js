var animal = 'dog'
const two = 2;

function myAnimal(animal) {
 var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
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

var theFunk = funkyFunction()
theFunk = theFunk()