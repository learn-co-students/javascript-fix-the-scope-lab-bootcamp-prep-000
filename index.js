var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'dog'
  animal = "cat"// How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
myAnimal();
yourAnimal();

var two = 2
function add2(n) {
  return n + two
}
add2();

var theFunk = 'FUNKY!'
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction
var theFunk = funkyFunction()()
