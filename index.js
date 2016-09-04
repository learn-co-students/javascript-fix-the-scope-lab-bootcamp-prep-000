var animal = 'dog'

function myAnimal() {
  var animal = 'dog';
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2;
  return n + two

  // Feel free to move things around!

}



// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

var theFunk = "FUNKY!"

function funkyFunction() {
  var adjective = "FUNKY!"
  return function theFunk(adjective) {
    return adjective
  }
}

// function funkyFunction() {
//  return function theFunk(adjective) {
//    var adjective = "FUNKY!";
//    return adjective
//  }
//}
