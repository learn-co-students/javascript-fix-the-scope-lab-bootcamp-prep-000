var animal = 'dog'

function myAnimal() {
  return animal
}


function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  function computeN(){
    const n = Math.floor(Math.random() * 1000)
    return n
  }
  return n + 2
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()
theFunk = theFunk()
