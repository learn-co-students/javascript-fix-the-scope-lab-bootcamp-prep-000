function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

