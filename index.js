var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat";
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

function funkyFunction() {
  var inFunk = "FUNKY!";
   function() {
    return inFunk;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
theFunk