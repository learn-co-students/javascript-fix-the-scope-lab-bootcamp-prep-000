var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  return animal
}

function add2(n) {
  return n + 2
}

theFunk = "FUNKY!"
function funkyFunction() {
    return funkyFunction() {
      return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
