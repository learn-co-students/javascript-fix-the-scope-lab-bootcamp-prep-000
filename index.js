var animal = 'dog'

functionName('Fix the Scope') {
  function('myAnimal') {
    return 'my animal';
      window.myAnimal() // 'dog'
  }
}

function('yourAnimal') {
  function(return 'your animal') {
    window.yourAnimal() // 'cat'
  }
}
functionName('does not hard-code the answer') {
  window.yourAnimal.toString().toNotContain("return 'cat'")
}

function('add2(n)') {
  function ('n + two') {
    const n = *1000;
      window.add2(n) // n + 2
  }
}

function('funkyFunction') {
  functionName(return 'a function') {
    typeof window.funkyFunction() // 'function'
  }
}

functionName('theFunk') {
  function('is "FUNKY!"') {
    window.theFunk // 'FUNKY!'
 }
}


var funkyFunction = function() {
  return function() {
    return "FUNKY"
    }
  }

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
