var animal = 'dog';

function myAnimal() {
  return animal;
}
myAnimal();

function yourAnimal() {
  var animal = 'cat';
  return animal;
}
yourAnimal();


function add2(n) {
  const two = 2;
  return n + two;
}
add2();


var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}


var theFunk = funkyFunction()();
