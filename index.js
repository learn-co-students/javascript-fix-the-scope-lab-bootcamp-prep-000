var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function outerFunction() {
  return function innerFunction() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()();

console.log(theFunk()());

