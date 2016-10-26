var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  var animal = "cat";// and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2

  // Feel free to move things around!
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
funkyFunction()();
