function myAnimal() {
  var myAnimal = 'dog';
  return myAnimal;
  console.log(myAnimal)
}

function yourAnimal() {
  var yourAnimal = 'cat'
  return yourAnimal;
  console.log(yourAnimal);
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function(){
  return function(){
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
theFunk();
