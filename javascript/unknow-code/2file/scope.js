let num1 = 5 // script mai asing not in window object
var num2 = 4 //asing in window object
{
  var num2 = 48 // override -> function scope -> so window mai it fall
}
function alpha () {
  var num2 = 48 // function scope ==?> owm Ec mai create

}

console.log(num2)
