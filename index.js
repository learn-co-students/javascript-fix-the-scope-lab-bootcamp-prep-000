var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = "cat"; // animal = 'cat' was added.
  return animal
}


function add2(n) {
  const two = 2
  
  // Swapped 'const' and 'return' positions
  
 return n + two
 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.


var theFunk = funkyFunction()() 
