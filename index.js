 vare animal = 'dog'

function myAnimal() {
  animal = 'cat';
  return animal
}
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
 myAnimal();
  return animal


}
yourAnimal();
var n = 60
function add2(n) {
  const two = 2;
   n = 388;
  return n + two;

  // Feel free to move things around!

}
add2(n);
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
theFunk();
