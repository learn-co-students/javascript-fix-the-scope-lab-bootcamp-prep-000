var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  myAnimal();
  return animal
}

function add2(n) {
  //return n + two-->this return statement has to come after declaring const.

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
var theFunk = (funkyFunction())();

/*My Note:
See Line 24. funkyFunction is a variable.
Invoking as funkyFunction() would return the inside function.
To get "FUNKY" returned, we need to invoke the inside function
ie (funkyFunction())()
*/
