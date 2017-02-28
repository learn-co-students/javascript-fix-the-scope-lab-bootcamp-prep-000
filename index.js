var animal = 'dog'

function myAnimal() {

  return animal
}

function yourAnimal() {
  // animal = 'cat'
  var animal = 'cat'// whenever you use var animal = 'cat', it sets a variable local to your function
  return animal
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

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
// funkyFunction()()
