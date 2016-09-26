var animal = 'dog';
function myAnimal() {
  var animal = 'dog';
  return animal
}

var animal = 'cat'
function yourAnimal() {
  var animal = 'cat';
  return animal
}

var two = 2;
function add2(n) {
  return n + two
}


var funkyFunction = function() {
return function() {
    return "FUNKY!"
  }
}
var theFunk=funkyFunction ()()

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
