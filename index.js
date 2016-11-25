var manimal = 'dog'
var yanimal = 'cat'

function myAnimal() {
  return manimal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yanimal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  var fFunction = function() {
    return "FUNKY!"
  }
  return fFunction
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theDunk = funkyFunction()
var theFunk = theDunk()
