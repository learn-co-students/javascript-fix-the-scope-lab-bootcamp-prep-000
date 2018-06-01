/** animal declared as a var and set to "dog" **/
var animal = 'dog';

/**
 *  myAnimal returns the variable animal
 */
function myAnimal() {
  return animal;
}

/**
 *  yourAnimal changes the local version of animal to "cat" then returns it, leaving the global animal alone
 **/
function yourAnimal() {
  return animal = 'cat';
}

/**
* add2 declares two and sets it to 2 then returns two plus the argument n
**/
function add2(n) {
  const two = 2;
  return n + two;
}

/**
* funkyFunction returns a nested function "function" which returns the string "FUNKY!"
**/
var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

/** theFunk is declared and assigned to the function call of the function within funkyFunction **/
var theFunk = funkyFunction()();
