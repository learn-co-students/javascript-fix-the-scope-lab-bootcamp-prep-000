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
  return (n + 2);
}

var funkyFunction = function(){
  return function(){
    return 'FUNKY!';
  }
}
var theFunk = funkyFunction()() //Why extra parentheses?
//because function returning other function?

//function funkyFunction(){
  //var theFunk;
  //return function(){
    //theFunk = 'FUNKY!'
  //  var theFunk = funkyFunction();
    //return theFunk;}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
