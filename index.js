var animal = 'cat'

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

var n = 26
function add2(n) {
  return n += 2
}

var theFunk = funkyFunction()()
function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
