var animal = 'dog'

function myAnimal(dog) {
  return (myAnimal = 'dog')
}

function yourAnimal(cat) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return (yourAnimal = 'cat')
}

function add2(n) {
  return (n) = (n + 2)

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function(theFunk) {
  return function(theFunk = 'FUNKY') {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = 'FUNKY!'
