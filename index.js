var animal = 'dog'

function myAnimal() {
  return animal
}

var catanimal = 'cat'
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return catanimal
}

function add2(n) {
   const two = 2
  return n + two
  // Feel free to move things around!
}


var funkyFunction = function() {
  return function() {
   return 'FUNKY!'
  }
}

var theFunk = funkyFunction()()