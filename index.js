var animal = 'dog'
var n = 21

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()
//Hey I actually figured this out by searching StackOverflow! I'm proud of that. 
