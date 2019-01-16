function funkyFunction() {
 
  return function() {
 
    return "Funky";
  }
}

var theFunk = funkyFunction();


console.log(theFunk())