/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      expect(yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(theFunk).toEqual('FUNKY!')
    })
  })

})
