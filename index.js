var animal = 'dog'

function myAnimal() {
  return animal ;
}

function yourAnimal() {
  return animal = 'cat' ;
}

function add2(n) {
    const two = 2
  return parseInt(n, 10) + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!" ;
  }
}
var theFunk = funkyFunction()
theFunk = theFunk()