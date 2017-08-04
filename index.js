var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(){
  var animal = 'cat'; // ~ I cant believe how long that took me to figue out -.-"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()();
 /*
 PLEASE look at the issues section for this lesson on the learn.co website. 'jtxd4792' had some very good input about 
 the clarification of the side by side '()'. It is not made clear in anyway in previous lesson and seems like improper
 syntax, even the wikipedia article on scope didn't reference something like that (at least in any way that made
 sense to my already very confused brain). Thank You!
 */
