  var animal = 'dog'
function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal1 = 'cat';
  return animal1
}

function add2(n) {
    const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
