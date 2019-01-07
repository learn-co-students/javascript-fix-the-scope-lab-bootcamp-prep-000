function myAnimal() {
  var animal = 'dog'
  return animal
}
function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  return n + 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()
theFunk = theFunk()
