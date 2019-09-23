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
   const two = 2
  return n + two

  // Feel free to move things around!
 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//Never in a million would I have figure this one one out. YOu call a function within a function from () adding another (). Therefore ()() is your answer here.
var theFunk = funkyFunction()();
