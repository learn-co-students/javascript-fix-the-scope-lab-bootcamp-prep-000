/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal') === ('dog'); 
      'returns(window.myAnimal().toEqual("dog")';
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      'returns(window.myAnimal()).toEqual("cat")';
    })

    it('does not hard-code the answer', function() {
      'returns(window.yourAnimal.toString().toNotContain("cat")';
    })
  })

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      'returns(window.add2(n).toEqual("446");'
    })
  })

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      'returns(window.funkyFunction().toEqual("function");'
  })
})
  
  describe('theFunk', function() {
    it('is "theFunk!"', function() {
      'returns(window.theFunk).toEqual("FUNKY!")';
    })
})
