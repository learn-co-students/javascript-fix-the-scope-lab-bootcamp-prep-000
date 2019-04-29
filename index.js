var animal = 'dog' //<-- global

function myAnimal() {
  return animal //<-- global 
}

function yourAnimal() {
  var animal = 'cat' //<-- declare local varialble animal
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  //declared varialble in block scope
  return (n + two)
  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return 'FUNKY!'
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var temp = funkyFunction()
//Temp now is the returned anonymous function name inside funkyFunction, the stringified version of `anonymous()`
//it enabled funkyFunction's argu, but not anonymous func's argu;

var theFunk = temp();
// call temp function; it will return "FUNKY!"
