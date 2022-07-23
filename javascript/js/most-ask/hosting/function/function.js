//1.  GC : fun1 mai asign fun1 F.D by hosting


//2.  console.log(fun1); --> display fun1 F.D


/* EC : trigger seing fun1 

1. hosting run var x = undefined 
2. EC run : 
*/

console.log(fun1)
fun1()
function fun1 () {
  console.log(num1)
  var num1 = 5
  console.log(num1)
}
console.log(fun1);// from widow it has take 