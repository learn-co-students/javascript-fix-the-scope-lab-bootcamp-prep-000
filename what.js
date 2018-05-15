function one(){
  var nothing
  console.log("one")
  return function two(){
    console.log("two")
    return function three(){
      console.log("three")
    }
  }
}


a=one()
a()