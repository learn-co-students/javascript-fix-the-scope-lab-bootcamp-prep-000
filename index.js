var animal = 'dog'

function myAnimal() {
  return animal;
}

myAnimal()

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

yourAnimal()

function add2(n) {
  const two = 2;
  return n + two;
}

add2(n)

  // describe('funkyFunction()', function() {
  //   it('returns a function', function() {
  //     expect(typeof window.funkyFunction()).toEqual('function')

function funkyFunction() {
  return function() {
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

  // describe('theFunk', function() {
  //   it('is "FUNKY!"', function() {
  //     expect(window.theFunk).toEqual('FUNKY!')

var theFunk = funkyFunction ();

function funkyFunction() {
  var beeno = "FUNKY!";
  return function() {
    return beeno;
  }
}

theFunk();
