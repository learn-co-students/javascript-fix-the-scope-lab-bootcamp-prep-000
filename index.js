var animal = 'dog';

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animalNew = 'cat';
  return animalNew;
  }

function add2(n) {
  const two = 2;
  return n + two;
}

function funkyFunction(){
  var funky = 'FUNKY!';
  return function funkyFunctionTwo(){
   return funky;
 }
}
var theFunk = funkyFunction()();
