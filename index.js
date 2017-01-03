var animal = 'cat'

function myAnimal() {
  var animal = 'dog'
  return animal
}
myAnimal();

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
var two = 2
return two + (n)
  // Feel free to move things around!

}
add2();

var funkyFunction = function() {

  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()();

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

// in this example you are using recursion -- in order to access the inner value you must access outter function.
