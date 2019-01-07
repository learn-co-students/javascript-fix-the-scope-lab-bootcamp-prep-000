var animal = 'dog'

function myAnimal() 
{
  return animal 
}

function yourAnimal() 
{
  var animal = 'cat'
  return animal
}

function add2(n) 
{
  const two = 2;
  return n + two
}

var funkyFunction = function outsideFunction() 
{
   return function insideFunction() 
   {
      return 'FUNKY!'
   }
}

var theFunk = funkyFunction()()