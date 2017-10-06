var animal = 'cat'

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

function funkyFunction(){
  return function innerFunk(){
    return 'FUNKY!'
  }
}

var theFunk = funkyFunction()
theFunk = theFunk()
