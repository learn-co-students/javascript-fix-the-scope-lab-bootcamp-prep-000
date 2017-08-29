var animal = 'dog'
var kitty = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return kitty
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}
/*
function funkyFunction() {
  return function() {
    return "FUNKY!";
  }
}
*/
function funkyFunction(){
  var funko = function bleh() {
    return 'FUNKY!'

  }

  return funko

}


// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = "FUNKY!"
