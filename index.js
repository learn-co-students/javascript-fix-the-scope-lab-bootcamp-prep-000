var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  function realAnimal() {
    var animal = 'cat'
    return animal
  }
return realAnimal()
}

function add2(n) {
  function nomorestring(n) {
    var nn = parseInt(n, 10)
    return nn + 2
  }
    return nomorestring(n)
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var preFunk = funkyFunction()
 
var theFunk = preFunk()
