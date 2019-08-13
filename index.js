var animal = 'cat'

function myAnimal() {
  return animal
}

var animal = 'dog'

function yourAnimal() {
  var animal = 'cat';
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

var theFunk = funkyFunction()(); 
