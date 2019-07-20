var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var otherAnimal = "cat"
  return otherAnimal
}

function add2(n) {
  var num = parseInt(n,10)
  return num += 2

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var FunkAttack = funkyFunction()
var theFunk = FunkAttack()
