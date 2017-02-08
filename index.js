var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'//shadowing animal as cat using local variable in function (gross)
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2 //moved const before return
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()//declare theFunk as funkyFunction
theFunk = theFunk();//reassign value as within function

//I can't believe that kind of self-referrential reassignemnet worked. Check with solution
