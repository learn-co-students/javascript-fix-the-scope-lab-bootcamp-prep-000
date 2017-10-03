
function fixTheScope(){
  function myAnimal(){
    var myAnimal = 'dog';
  console.log(myAnimal);
  }
}

function yourAnimal(){
  var animal = 'cat';
  console.log(animal);
}

function add2(n){
  var = (n+2);
  console.log(n);
}

function funkyFunction(){
  console.log(function);
}

function theFunk(){
  var theFunk = funkyFunction()
  console.log('FUNKY!');
}
