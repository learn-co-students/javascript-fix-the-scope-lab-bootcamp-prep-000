var animal = 'dog';

function myAnimal() {
  var animal = 'dog';
  return animal;
}

myAnimal();

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

yourAnimal();

var n;

function add2(n) {
  var two = 2;
  return n + two;
}

add2(n);
/*Remember the purpose of using () is to call functions in JavaScript. It essentially tells our code to execute the function. A function called without a (), like simply functionName, will return the function but NOT run it. You'll see the return value as [Function: functionName].
To get our code to execute that function, we instead call functionName(), which executes the code within that function.
As an example, the third test here at first returns: Error: Expected [Function: funkyFunction] to equal 'FUNKY!'
We can make the function execute by saying this:
var theFunk = funkyFunction() But this returns ANOTHER FUNCTION! How would we tell that function to execute to return the string within it?*/

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()();

theFunk;


