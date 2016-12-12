{
  function myAnimal(animal)
  {
    var animal = 'dog';
    return animal
  }
    myAnimal();
    function yourAnimal(animal)
  {
    var animal = 'cat';
    return animal;
  }
}

{
  function add2(n)
  {
    return n + 2
  }
}

{
  var funkyFunction = function()
  {
    return function theFunk()
    {
      return "FUNKY!"
    }
  }
    var theFunk = funkyFunction();
    var theFunk = theFunk();
}
