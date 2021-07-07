var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  return animal
}
var x = myAnimal();
console.log(x);
yourAnimal();
var y = yourAnimal();
console.log(y)


function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var a = funkyFunction();

var theFunk = a();
console.log(theFunk);



function outer() {
  var example = "Greetings "
 
  return function inner(name) {
    return example + name
  }
}

var greeting = outer()
var a = greeting('Proffesor Falken');
console.log(a);



