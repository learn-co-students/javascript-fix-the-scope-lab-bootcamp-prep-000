var animal = 'dog';

function myAnimal() {
  return animal;
}
var pet= "cat";
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal= this.pet;
  return animal;
}
const two = 2;
function add2(n) {
  return n + two;

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var dar=  funkyFunction();
var theFunk = dar();