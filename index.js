var animal = 'dog'
//returns my animal
function myAnimal() {
  return animal
}
//returns your animal
function yourAnimal() {
  var animal = 'cat'
  return animal
}
//adds two to n
function add2(n) {
  return n + 2
}
//returns a function, is "FUNKY!"
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
