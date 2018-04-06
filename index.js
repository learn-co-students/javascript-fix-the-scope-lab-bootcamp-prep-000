var animal = 'dog'
var n = 2 

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal= 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return parseInt (n + two)
}

var funkyFunction = function() {
    return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below.

//var theFunk = funkyFunction
//var theFunk = "FUNKY!"

var theFunk = funkyFunction()()


/*

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
*/