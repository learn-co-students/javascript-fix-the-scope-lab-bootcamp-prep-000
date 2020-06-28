function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}
function add2(n) {
  return n + two;
}
  // Feel free to move things around!
  const two = 2


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

  var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }

  var theFunk = funkyFunction()()
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
