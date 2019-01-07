var animal = 'dog'
var funkyVar = ""

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function funky() {
    return "FUNKY!"
  }
  
}


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()

console.log(`the Funk = ${theFunk}`)
console.log("Calling the function " + funkyFunction())
