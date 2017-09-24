var animal = 'dog';
var hisAnimal = 'cat';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return hisAnimal;
}

function add2(n) {
  return n + 2;

  // Feel free to move things around!
  //const two = 2
}

function funkyFunction() {

  theFunk = "FUNKY!";

    return function theFunk(){
    theFunk = "FUNKY!";

    return theFunk;
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
