var animal = 'dog'
const n = Math.floor(Math.random() * 1000)

function myAnimal() {
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

  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk2=funkyFunction()
//console.log(theFunk)
var theFunk = theFunk2()
console.log(theFunk)


function party(){
  console.log ( "Let's Party!" )
}

var Birthday = party()
console.log(Birthday)
