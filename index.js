 var animal = 'dog';
 var pet = 'cat';

function myAnimal() {
  animal = 'dog';
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return pet;
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

function funkyFunction() {
   var stuff = "FUNKY!";
   return function() {
      return stuff;
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()
theFunk();
