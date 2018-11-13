 animal = 'dog' ;
function myAnimal() {
  return animal;
}
console.log(myAnimal());

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
};
console.log(yourAnimal());

function add2(n) {
  const two = 2
  n = 5;
  return n + two;
}
console.log(add2());

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction();
console.log(theFunk());
