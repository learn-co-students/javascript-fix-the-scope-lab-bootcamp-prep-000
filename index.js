var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
   animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

function funkyFunction() {
  return function() {
};
}

var theFunk = function funkyFunction() { 
 return function funkyFunction() {
    return "FUNKY!";
  }
};

console.log(theFunk()())
