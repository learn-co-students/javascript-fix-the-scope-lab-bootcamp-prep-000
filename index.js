var animal = 'dog';
var yourAni = 'cat';

function myAnimal() {
  return animal ;
};

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAni ;
};

function add2(n) {
const two = 2 ;
const n = Math.floor(Math.random() * 1000)) ;
  return n + two ;
};

function say(string){

};

function funkyFunction() {
  return say("FUNKY!");
};

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
