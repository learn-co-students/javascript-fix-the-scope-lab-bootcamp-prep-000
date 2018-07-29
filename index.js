
var animal = 'dog';
const two = 2;
const nn = Math.floor(Math.random() * 1000);
var nnn;
var theFunk;
var jester2


function myAnimal() {
    return animal
}

console.log(myAnimal())

function yourAnimal() {
   var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
console.log(yourAnimal())
nnn =nn
console.log(nnn);
function add2(n) {
  return n + two

  // Feel free to move things around!

}



var funkyFunction = function outside() {
  return function inside() {
     return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

nnn = add2(nn);
console.log(nnn);
console.log(funkyFunction()());

theFunk = funkyFunction()()
console.log(theFunk)






