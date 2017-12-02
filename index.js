var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat'
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction();
theFunk;
theFunk = theFunk();

/*N
ote to self:

The last call of the function returns the string required but is not assinged as a variable
So you have to invoke the function AND assing the value.

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
undefined
var theFunk = funkyFunction();
undefined
theFunk;
ƒ () {
    return "FUNKY!"
  }
theFunk();
"FUNKY!"


*/
