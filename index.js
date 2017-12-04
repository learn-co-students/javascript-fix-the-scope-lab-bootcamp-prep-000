var animal = 'dog'

// 1 GOOD
function myAnimal() {
  return animal
}

// 2 GOOD
function yourAnimal() {
  var animal = 'cat'
  return animal
}

// 3 GOOD
function add2(n) {
  const two = 2
  return n + two
}

// 4
var funkyFunction = function() {
  return function theFunk() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()
var theFunk = theFunk()

//Basically, the way I see it, in order to call upon the inner layers of a function
//you need to layer the variable you use to call through those layers.
//Hence why "theFunk" has double variables - to call two layers deep
//At the same time, we need functions to reference those inner layers.
