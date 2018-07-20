var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return parseInt(n + 2)

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function a(){
  return function b() {
    return "FUNKY!"
  }
}

var theFunk = run() funkyFunction
  
  