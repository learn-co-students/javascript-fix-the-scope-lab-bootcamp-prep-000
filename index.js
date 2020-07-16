var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}
function add2(n){
  const two = 2 
  return n + two
}

//technicaly, below is the ideal way
function add2(n) {
  return n +=2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()

    