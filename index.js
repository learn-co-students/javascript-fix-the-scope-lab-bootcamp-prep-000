var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  function returnCat() {
    return animal;
  }
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function() {
  var funky = "FUNKY!";
  return function() {
    return funky;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
