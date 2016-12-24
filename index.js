var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat";
  return animal;
}

function add2(n) {
  const two = 2;
  var num = n;
  return num + two;
  // Feel free to move things around!
}

var funkyFunction = function(){
  var x = "FUNKY!"
  return function fofo() {
    return x;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction(function());
console.log(theFunk);
