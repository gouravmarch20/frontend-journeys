// TODO:
// FUNCTION DEFINE
b(40)
function b (x) {
  a(20)
  console.log('--- hosting core ---')
  var a = 50
  function a (num) {
    console.log(num)
    console.log('inside function ', x)
    console.log('', a)
  }
  console.log('after function call', a)
}
//var b read --> hosted it --> ec with 40 passing
/*
- num = 40 
- a function : fd (hosted) at top , a  called immeditly  new ec //**



----- end of fun a 

a mai continue hosting 
a mai asing 50
clg(a)
*/

/*
- function a run --> hosting , EC : x not so lexical sope sai acess CLG(x) , CLG(a)

*/

