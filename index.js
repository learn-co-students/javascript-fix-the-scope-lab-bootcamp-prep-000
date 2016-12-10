var animal = ['dog','cat'];

function myAnimal() {
  return animal[0];
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal[1];
}

function add2(n) {
  return n + 2;
}

function funkyFunction() {
  function funkierFunction(funk) {
    return funk;
  }
  return funkierFunction;
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk('FUNKY') = funkyFunction();
