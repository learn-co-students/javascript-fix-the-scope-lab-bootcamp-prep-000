var animal = 'dog';

function myAnimal() {
  console.log(animal);
  return animal;
}

function yourAnimal() {
var animal = 'cat';
  return animal;
}

function add2(n) {
  var two = 2;
  return n + two;
}

function funkyFunction() {
  return function theFunk() {
      return "FUNKY!";
    };
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
var theFunk = theFunk();
