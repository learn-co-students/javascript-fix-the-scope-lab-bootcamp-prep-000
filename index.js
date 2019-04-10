var myanimal = 'dog'

function myAnimal() {
  return myanimal;
}

function yourAnimal() {
  var youranimal="cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}

function add2(n) {
  const two = 2;
  return two + n;

  // Feel free to move things around!
}

function funkyFunction() {
  var funk = "FUNKY!"
  function innerr(){
    return funk
  }

return innerr
}
var me = funkyFunction()
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//function funkyFunction(){
  //return function(){
    //return "FUNKY!"
  //}
var theFunk = me()
 // theFunk()



