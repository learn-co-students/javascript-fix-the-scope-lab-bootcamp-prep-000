var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

console.log(funkyFunction()())
