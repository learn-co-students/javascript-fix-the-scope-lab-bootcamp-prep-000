var animal = 'dog'

function myAnimal() {
  var animal='dog'
  return animal
}

function yourAnimal() {
  var animal='cat'
  return animal
}

// How can we make sure that this function
// and the above function both pass?
// P.S.: You can't just hard-code 'cat' below


function add2(n) {
  const two = 2
  return n + two

}
// Feel free to move things around!

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
