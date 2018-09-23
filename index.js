var animal = 'dog'
var youranimal = 'cat'

//test 1
function myAnimal() {
  return animal
}
console.log(myAnimal())
//test 2
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}
console.log(yourAnimal())
//test 3
function add2(n) {
  const two = 2
  return n + two
}
console.log(add2(6))
//test 4
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
console.log(theFunk)