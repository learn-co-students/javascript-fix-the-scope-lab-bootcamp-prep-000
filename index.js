var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal='cat'
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

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.

var theFunk = funkyFunction();
theFunk=theFunk();


