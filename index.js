var animal = 'dog'

console.log(myAnimal());
function myAnimal() {
  return animal
}

console.log("this is", myAnimal())

console.log("this other animal is", yourAnimal())
console.log(animal);
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
 var animal='skunk'
  console.log(`your animal is ${animal}`);
  return animal
}

console.log(add2(4));
function add2(n) {
const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function () {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
console.log(theFunk);
