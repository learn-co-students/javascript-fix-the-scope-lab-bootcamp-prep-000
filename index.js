var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var newAnimal= 'cat'
  return newAnimal
}

function add2(n) {
  if(n===isNaN){
    return
  }
  else{
    return n+=2
  }
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()

theFunk= theFunk();
