var animal = 'dog'
function myAnimal() {	
  return animal
}

function yourAnimal() {				
  var animal = 'cat'
  return animal
}

function add2(n) {					
 const two = 2  
 return n + two
}

var funkyFunction = function() {		//  Got [Function: funkyFunction]. Should get: ’FUNKY!'
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction();
theFunk();

var funkyFunction = function() {	
  var innerVar =  "FUNKY!"
  return function() {
  return innerVar;
  }
}
var theFunk = funkyFunction();

theFunk();

//both of these funkyFunctions 
//return "FUNKY!" in Sublimetext. 
//I'm not sure what you people are looking for. 