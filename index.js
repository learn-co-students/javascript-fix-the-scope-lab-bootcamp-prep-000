var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
 console.log("cat");
 return "cat"
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  var innerVariable = "FUNKY!"
  return function innerFunction() {
    return innerVariable}
  }
  var theFunk = funkyFunction()()
