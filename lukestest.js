var funkyFunction = function() {
  console.log("outer callled")
  return function() {
    console.log("inner called")
    return "FUNKY!"
  }
}

var funky = function(){
  var innerVariable = "I'm sort of a secret.";
  console.log("outer")
  
  return function innerScope() {
    console.log("innerScope")
    var inaccessible = "Nothing can touch me.";
    return innerVariable;
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funky()
var newfunk = theFunk()