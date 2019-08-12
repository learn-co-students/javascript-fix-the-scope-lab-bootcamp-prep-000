var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
yourAnimal();

function add2(n) {
  const two = 2
  return n + two;

  // Feel free to move things around!

}

var funkyFunction= function () {
  return function () {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()(); 

//to make this work you need to call the function twice, because if you use just 1 () it will return another function, so you need to call that one to be able to get "FUNKY"!
