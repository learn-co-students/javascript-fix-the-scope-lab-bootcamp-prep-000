var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

function funkyFunction() {
  return function(){
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()