function add(x) {
  return function(y) {
    console.log(`${x} + ${y}!`);
    return x + y;
  };
}

var addTwo = add(2);

addTwo(4)
add(3)(4) === 7
