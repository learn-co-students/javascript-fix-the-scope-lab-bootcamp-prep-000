var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two

}

var funkyFunction = function() {
  return function () {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction() ()







//0 () ==> Error: Expected [Function: funkyFunction] to equal 'FUNKY!'
//1 () ==> Error: Expected [Function] to equal 'FUNKY!'
//Questions:
//I ran the following code and it returned "FUNKY!" in the console. Why does this not pass the test?
//var theFunk = funkyFunction()
//theFunk()
//console.log(theFunk())
