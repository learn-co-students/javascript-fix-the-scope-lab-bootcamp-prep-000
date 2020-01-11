n = 10

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}

function add2(n) {
  
  const two = 2
    return n + two
}




function funkyFunction() { 
  return function() { 
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

theFunk = funkyFunction()()

console.log(theFunk)
console.log("THIS TEST FUCKING SUCKS! FIX YOUR TESTS IF THEY'RE GONNA BE GRADED THROUGH SOME 3RD PARTY IDE!")