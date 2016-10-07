var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}


 function funkyFunction() {
   var oldFunk = "FUNKY!";

   return function fridayFunk() {
     var whatTheFunk = "What the funk am I doing?";

     return oldFunk;
   }
 }

var theFunk = funkyFunction() ();
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
