var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var yourAnimal = 'cat';
  return yourAnimal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()();

