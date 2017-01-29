var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat"
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
<<<<<<< HEAD
var theFunk = funkyFunction ()()
=======
var theFunk = funkyFunction
>>>>>>> 31d4bd2af8add23903bca6f83b8f7967c84b155f
