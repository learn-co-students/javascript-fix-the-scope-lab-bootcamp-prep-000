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

var theFunk = 'FUNKY!'

var funkyFunction = function() {
  return function () {
  console.log('theFunk')
  }
}
