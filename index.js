var animal = 'dog'

function myAnimal()
{
  return animal
}

function yourAnimal()
{
  //redefining animal within scope of function
  animal = 'cat'
  return animal
}

function add2(n)
{
  // must define two before using it in calculation
  const two = 2
  return n + two
}

var funkyFunction = function()
{
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
// I added two sets of parenthesis in order to execute both levels of functions.

var theFunk = funkyFunction()()
