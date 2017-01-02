var animal ="dog";
 function myAnimal() {
  return "my animal";
}
myAnimal();


var animal ="cat";
function yourAnimal() {
  return "your animal";
}
  yourAnimal();
  animal
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function add2(n) {
  return n + 2;
}
   add2(2);


var funkyFunction = function() {
    return "FUNKY!";
  };
var theFunk = function(funk){
return funk();
};
theFunk(funkyFunction);
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
v
