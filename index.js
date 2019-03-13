function myAnimal() {
  var animal = "dog";
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal;
}

const two = 2;
function add2(n) {
  return n + two
}

var funkyFunction = function outsideFunction() {
  return function insideFunction() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()
theFunk = theFunk()