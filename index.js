var animal = 'cat'
function myAnimal() {
<<<<<<< HEAD
  var animal = 'dog'
=======
  
>>>>>>> 7de73c31c35686c6b72c2af3bd92339fd4aabb46
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
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
var theFunk = function()
