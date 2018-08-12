var animal = 'cat'

function myAnimal(string) {
  return "dog"
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return (n + 2)

  // Feel free to move things around!
  const two = 2
}
 var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"
