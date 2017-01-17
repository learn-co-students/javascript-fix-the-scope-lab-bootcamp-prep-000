var animal = 'dog'

function myAnimal(animal) {
var animal = 'dog'
if (animal !='dog') {
  return 'cat'
}
 else{
   return animal
 }
}

function yourAnimal(animal) {
  var animal = 'cat'
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
var theFunk = funkyFunction()()
