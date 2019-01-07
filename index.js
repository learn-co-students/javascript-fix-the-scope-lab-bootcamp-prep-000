var animal = 'dog'

function myAnimal(x) {
 var x = 'dog'
 return x
}

function yourAnimal(x) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var x = 'cat'
  return x
}

function add2(n) {
   const two = 2
  var x = n + two
  return x

  // Feel free to move things around!
 
}

var funkyFunction = function() {
    
  return function () {
  
 return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()



