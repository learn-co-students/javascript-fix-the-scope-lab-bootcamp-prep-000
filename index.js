var animal = 'dog'

function myAnimal()
  {
        return animal
  }

function yourAnimal()
   {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
var myAnimal = "cat"
  console.log(myAnimal)
    return myAnimal

   }

function add2(n)
 {

  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction =function()
{
  return function theFunk()
  {
    return 'FUNKY!'
    }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
var theFunk = theFunk ()
