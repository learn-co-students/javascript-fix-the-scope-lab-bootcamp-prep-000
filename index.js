var mA = 'dog'
var yA = 'cat'
function myAnimal() {
  return mA
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yA
}

function add2(n) {
    // Feel free to move things around!
    var res = n + 2
    return res
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
theFunk = theFunk()
