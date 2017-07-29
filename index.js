var animal = 'dog'

function myAnimal() {

  return animal;
}
myAnimal();

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat";
    return animal;
}
yourAnimal();

function add2(n) {
  var n= n + 2;
  return n;
  // Feel free to move things around!

}
add2;


var funkyFunction = function() {
return function() {
return "FUNKY!"
}
}
var theFunk = funkyFunction()();
theFunk;
