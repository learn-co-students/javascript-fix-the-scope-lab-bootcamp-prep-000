var animal = 'dog'

function myAnimal() {

  return animal
}

function yourAnimal() {
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}


function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}
//function outerFunction() {
//  var innerVariable = "I'm sort of a secret.";

//  return function innerScope() {
//    var inaccessible = "Nothing can touch me.";

//    return innerVariable;
//  }
//}


var theFunk = "FUNKY!";
var funkyFunction = function() {
  //var theFunk = "FUNKY!";//funkyFunction
  return function() {
    return theFunk;//"FUNKY!";
 //return function theFunk(){
  // //return theFunk;//"FUNKY!"
   //return "FUNKY!"
  }
}

  //return funkyFunction
//}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
//var theFunk = funkyFunction
