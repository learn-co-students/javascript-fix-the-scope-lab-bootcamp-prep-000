function celebrityName(firstName){
  var nameIntro = "This celebrity is ";
  function lastName(theSurName){
    return nameIntro + firstName + " " + theSurName;
  }
  return lastName();
}

var myName = celebrityName("Andy")
console.log(myName)

myName ("Hoopers")
console.log(myName)
console.log(celebrityName)
