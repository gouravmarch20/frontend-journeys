// ec -< invoked in function -> cp: var x = undefined -> ep : print undefined
// hosting 2 step process -> 1st initialize whole code ==> GC run
// IN each EC it run again 
var num1 = 21
var fun = function () {
  console.log(num1)
  var num1 = 10
}
fun()
