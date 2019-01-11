/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    console.log('returns your animal', function(){
      expect(window.yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })

  describe('add2(n)', function() {
    console.log('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function() {
    console.log('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    console.log('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
