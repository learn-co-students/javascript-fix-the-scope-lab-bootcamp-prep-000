var animal = 'dog'

function myAnimal() {
  return animal
}
myAnimal()

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = "cat"
  return animal
}
const two = 2 // I had to move constant out side of function. googled const. const is somewhat a cemented value that sort
function add2(n) {   // (from above) that sort of cant be changed . no reassignments allowed. more or lesss.
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return  function() {  //Shouldnt i name the function to make it exist? and then run it outside it. but in bigger function?
    return "FUNKY!"
  }

}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()() // apprently to run more functions you add another paren.
