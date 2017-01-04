var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function(){
  return function() {
  }
}

function funky(){
  return "FUNKY!"
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funky()
