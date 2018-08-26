var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

 const two = 2
 function add2(n) {
  return n + two
}

var theFunk = function() {
  return function() {
    return "FUNKY!"
  }
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()
theFunk = theFunk()
