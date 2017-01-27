var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat'
  return animal;
}

function add2(n) {
  const two=2;
  return n + two;
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var funkyFunction = function() {
  var n="FUNKY!";
  return function() {
    return n;
  }
}

var theFunk = funkyFunction()();
