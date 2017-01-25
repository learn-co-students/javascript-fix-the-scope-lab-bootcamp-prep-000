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

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction
