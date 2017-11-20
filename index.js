
function myAnimal() {
  var myAnimal = 'dog'
  return myAnimal
}

function yourAnimal() {
  var yourAnimal = 'cat'
  return yourAnimal
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

var theFunk = funkyFunction()()
