 var animal = "cat" ;

function myAnimal() {
  var animal = 'dog';
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  
    const two = 2 ;

  return n + two 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = "FUNKY!"
