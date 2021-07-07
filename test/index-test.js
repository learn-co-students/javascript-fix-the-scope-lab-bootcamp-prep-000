/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns the animal variable', () => {
      expect(window.myAnimal()).toEqual('dog')
    })

    it('does not modify the  animal variable', () => {
      expect(window.myAnimal.toString()).toNotContain("animal =")
    })
  })

    function myAnimal() {
    var animal = 'dog';
    return animal;
  }

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      expect(window.yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toContain("return animal")
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })

    it('does not change the output of the myAnimal function', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  function yourAnimal() {
    var animal = 'cat';
    return animal;
  }

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })
  
    function add2(n) {
   var two = 2
    return n + two;
  }

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })
  
    var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
}

  describe("the variable 'theFunk'", function() {
    it('is equal to "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

  var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }
   var theFunk = funkyFunction()()

})
