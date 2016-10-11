var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat'
  return animal
}
const two = 2
function add2(n) {
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
theFunk = theFunk();
