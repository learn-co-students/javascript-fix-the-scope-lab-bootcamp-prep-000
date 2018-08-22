var animal = 'dog'


function myAnimal() {
  return animal
}


function yourAnimal() {
  var animal = "cat"
  return animal
}

const two = 2

function add2(n) {
  return n += two
 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = (funkyFunction()());
