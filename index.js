var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal
}

function add2(n) {
  var two = 2
  return n + two
  // Feel free to move things around!
  // const two = 2
}

/*var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}*/

function funkyFunction() {
    return function() {
      return "FUNKY!";
    }
  //return function() {
    // return "FUNKY!";
}
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
// var funckyFunction = "FUNKY!";

var theFunk = "FUNKY!";
