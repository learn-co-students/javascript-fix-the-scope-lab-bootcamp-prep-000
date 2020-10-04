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

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe("the variable 'theFunk'", function() {
    it('is equal to "FUNKY!"', function() {
      expect(window.theFunk()).toEqual('FUNKY!')
    })
  })

})
