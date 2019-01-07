var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var differentAnimal = 'cat';
  return differentAnimal;
}

function add2(n) {
  
  const two = 2;
  return n + two;

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var tooFunky = funkyFunction();

var theFunk = tooFunky();

/* So, here's how this works: First, call funkyFunction, which returns its inner function as its value. Then, by setting the variable tooFunky equal to that call to funkyFunction, tooFunky and funkyFunction's inner function are now one and the same. So, to get the string "FUNKY!" from that inner function, just call tooFunky, and set its return value ("FUNKY!") equal to theFunk. */
// Another note: since () calls functions, I can use it twice to call an inner function. As in, according to the official solution, set var theFunk = funkyFunction()() .
// Also, funkyFunction HAS to return function() {...}. I get an error if I omit "return".