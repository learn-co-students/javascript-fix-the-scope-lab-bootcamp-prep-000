var animal = 'dog'

function myAnimal() {
  return animal
  return myAnimal()
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}
yourAnimal()

function add2(n) {
  const two = 2
  return n + two
}

// var funkyFunction = function() {
// return function()
// {return "FUNKY!"
//   }
// }
var funkyFunction = function() {
return function() {
  return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = (funkyFunction())();
