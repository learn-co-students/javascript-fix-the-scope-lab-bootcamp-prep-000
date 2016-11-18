var animal = 'dog'

yourAnimal();

var numA = 644

add2(numA)

function myAnimal() {
  return animal
}

function yourAnimal() {

  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {

    // Feel free to move things around!
    const two = 2

  return n + two

}



var funkyFunction = function() {

  return function() {

    return "FUNKY!"
  }

}

var theFunk = funkyFunction()()



// We want this to return a f
