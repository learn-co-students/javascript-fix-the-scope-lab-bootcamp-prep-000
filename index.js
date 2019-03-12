var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // We declare the variable "animal" to be "cat" 
  //inside of the yourAnimal Function. Therefore, 
  //when this function is called, only the variable
  //inside of it will be read.
  
  var animal = 'cat'
  return animal
}

function add2(n) {
  
  //We have to declare the constant two before we 
  //do anything with it. The error was declaring the 
  //constant after the function passed through.
  
  
  const two = 2
  return n + two

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()