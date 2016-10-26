var animal = 'dog'                          //global variable of animal that contains dog

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'                        //create a local variable named animal that gets called in yourAnimal which contains cat
  return animal
}

function add2(n) {
  const two = 2                             //never learned what const is but assuming it is a constant variable? the issue with this was that it was defined after return (in which it calls two), so I moved it to before
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()             //added ()() so you have access to the string buried under 2 nested functions in funkyFunction
