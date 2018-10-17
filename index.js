var animal = 'dog'

function myAnimal() {
  return 'dog'
}
myAnimal()

var animal = 'cat'
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return "cat"
}
console.log(animal)
var two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
  
}
function funkyFunction(){
  return function(){
    
  }
  funkyFunction()

}
var theFunk = 'FUNKY!'
function theFunk(){
  return 'FUNKY!'
  
}
console.log(theFunk)

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//var theFunk = funkyFunction
