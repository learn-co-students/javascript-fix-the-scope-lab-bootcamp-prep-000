var animal = 'dog'

//Function will return dog
function myAnimal() {
  return animal
}
//Function will return the local variable cat
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal
}

//Function defines two as 2 and defines answer as the number + two
function add2(n) {
  var two = 2
  var answer = n + two
  return answer

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//Returns the string located in the second function of funkyFunction
var theFunk = funkyFunction()()
