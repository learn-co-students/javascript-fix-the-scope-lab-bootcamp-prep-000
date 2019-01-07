var animal = 'dog'

function myAnimal() {
  return animal // returns the global var animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat" // local var animal is returned
  return animal
}

function add2(n) {
  const two = 2

  // Feel free to move things around!
  return n + two
}

var funkyFunction = function() 
{
  return function() 
  {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

// first assign return of funkyFunction to theFunk variable
// this will make theFunk = function(){ return "FUNKY!" }
var theFunk = funkyFunction()
// then we need to execute the inner function for the return string ("FUNKY!")
// we can reassign theFunk var to the executed function of theFunk() which gives
// the return string ("FUNKY!")
theFunk = theFunk()

