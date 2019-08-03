var animal = 'dog'

function myAnimal(a) {
  var mine = animal
  return mine
}

function yourAnimal(b) {
  var yours = "cat"// How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yours
}

function add2(n) {
  const two = n + 2

  // Feel free to move things around!
   return two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
//  you only need to modify the code below this line.
var theFunk = funkyFunction()
