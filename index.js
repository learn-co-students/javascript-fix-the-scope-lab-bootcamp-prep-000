var animal = 'dog';

var myAnimal = function() {
    return animal;
};

var yourAnimal = function() {
    var animal = 'cat';
    return animal;
};

var add2 = function(n) {
    const two = 2;
    return n + two;
};

var funkyFunction = function() {
    return function() {
        return "FUNKY!";
  }
};

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction();
theFunk = 'FUNKY!';
