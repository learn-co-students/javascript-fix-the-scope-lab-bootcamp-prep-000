var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

var n = Math.floor(Math.random() * 1000)

  function add2(n) {
    const two = 2
    return n + two
}

var theFunk = funkyFunction()()

function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}
