var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
<<<<<<< HEAD
  return function() {
    return "FUNKY!";
  }
=======
  return function theFunk() {
    return 
>>>>>>> 5a6eecf551004feceb8285d0a226fb2afb6cac25
}
}


var theFunk = funkyFunction()();




// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
