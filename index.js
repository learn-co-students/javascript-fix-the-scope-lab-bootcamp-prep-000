var animal = 'dog'

function myAnimal() {
return animal
animal = 'cat'
}


function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
var animal = "cat"
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

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction
funkyFunction
theFunky();

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
