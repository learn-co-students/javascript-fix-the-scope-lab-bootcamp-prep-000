function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
var animal = 'cat'
  return animal
}

function add2(n) {

const two = 2
  return n + two

  // Feel free to move things around!

}


/*var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}*/

 /*/function funkyFunction () {
var theFunk = "FUNKY!"
  return function() {
    return theFunk
  }
}
funkyFunction ();
*/
function funkyFunction () {
  return function () {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()
