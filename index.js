function myAnimal() {
  var animal = 'dog'
  return animal
}


function yourAnimal() {
  var otherAnimal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return otherAnimal
}

function add2(n) {
  const two = 2
  return n += two
  // Feel free to move things around!
}

var funkyFunction = function() {
return function() {
  return "FUNKY!"
}
}

var theFunk = funkyFunction()()
