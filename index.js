var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}

function add2(n) {
  // Feel free to move things around!
  const two = 2;

  return n + two;
}

function funkyFunction() {
  var funkyText = 'FUNKY!';
  return function innerFunk() {
    return funkyText;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
