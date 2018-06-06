var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animals = 'cat'
  return animals
}

yourAnimal();

console.log(animal)
console.log(animals)

function add2(n) {
  var product = n + 2
  return product

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
   return "FUNKY!"
   
  } 
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()
theFunk();
 
