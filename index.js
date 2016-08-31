var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat';
  return animal
}

function add2(n) {
const two = 2
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// function outerFunction() {
//   var innerVariable = "I'm sort of a secret.";
//
//   return function innerScope() {
//     var inaccessible = "Nothing can touch me.";
//
//     return innerVariable;
//   }
// }
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var huh = funkyFunction();
var theFunk = huh();
