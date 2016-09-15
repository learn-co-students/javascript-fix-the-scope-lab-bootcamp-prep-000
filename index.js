var animal = 'dog'

function myAnimal() {
  var anmial ='cat'
  return animal
}

function yourAnimal() {
  var animal='cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  var add2 = n + 2
  const two = 2
  return n + two
} // Feel free to move things around!

// 4 things:
// Setting variables
// var name = "Neil"
// var weight = 145
// var cart = {}

// Getting variables
// console.log(name)
// alert(soupFlavor)

// Defining Functions (Javascript Closures)
// function(){
// }
// function stupid(){
// }
// function multiply(){
//   return a*b;
// }
// function alertString(s){
//   alert(s);
// }
// function logString(s){
//   console.log(s);
// }

// Executing Functions
// x = multiply(4,5) //x => 20
// y = stupid() //y=> undefined
// alertString("steve")
// z = logString("Lunch") // z=>

//(Instantiate Objects)
// Array.new
// Object.new

var funkyFunction = function() {
  return function() {return "FUNKY!"
  }
  }


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
