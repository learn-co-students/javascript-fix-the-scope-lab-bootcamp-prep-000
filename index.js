var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var anCat = 'cat' // How can we make sure that this function
  animal = anCat // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

function funkyFunction() {
  return function () {
    var theFunk = "Funky"
    return theFunk
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"