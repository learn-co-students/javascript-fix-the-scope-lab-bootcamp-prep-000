var animal1 = 'cat'

function myAnimal() {
  var animal2 = 'dog';
  return animal2
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal1
}

function add2(n) {
  const two = 2;
  return n + two

  // Feel free to move things around!

}

  function funkyFunction() {
    theFunk = 'FUNKY!';
  return function() {
    return theFunk
  }
}


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
