var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// The hardest thing for me to grasp was the final challenge – getting to the inner function of funkyFunction. Basically, we declare that theFunk is equal to funkyFunction(). Once we have that stored, we can call the var as a function (theFunk() ) and have that result equal theFunk. By doing so we can finally access return function(), which returns “FUNKY!”
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
theFunk = theFunk()