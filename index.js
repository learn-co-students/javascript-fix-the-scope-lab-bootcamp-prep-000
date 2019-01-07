var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() { 
  var animal='cat'
  return animal
}

function add2(n) {
  const two = 2
  
  return parseInt(n,10) + two

  // Feel free to move things around!
 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction ()
theFunk = theFunk ()


