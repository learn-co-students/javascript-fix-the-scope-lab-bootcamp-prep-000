var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var anotherAnimal = 'cat';
  return anotherAnimal;
}

function add2(n) {


  // Feel free to move things around!
  const two = 2
  return parseInt(n) + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var runFunction = funkyFunction();
var theFunk = runFunction()
