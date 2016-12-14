

  function myAnimal() {
    var animal = 'dog';
    return animal;
}

function yourAnimal() {
var animal = "cat";
      return animal;
  }// How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function add2(n) {
  var two = 2;
  return n + two;
  // Feel free to move things around!
}






function funkyFunction() {
return function theFunk(){
return "FUNKY!";
        }
}
var theFunk = funkyFunction()();


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
