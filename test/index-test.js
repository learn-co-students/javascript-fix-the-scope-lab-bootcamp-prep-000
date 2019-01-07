/*global describe, it */

describe('Fix the Scope', function () {
  describe('myAnimal()',  function () {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function animal(){
       'cat'== 'dog'
      return animal

      expect(window.yourAnimal('dog')).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })


  })

  describe('add2(n)', function() {
    it('adds two to n', function NaN () {
      parseInt('422')
      return NaN

      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function funky() {
    return funky
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function theFunk() {
    theFunk = "FUNKY!"
    return theFunk
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
