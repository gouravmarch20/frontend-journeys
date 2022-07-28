function two () {
  console.log(isValid)//
}
function one () {
  console.log(isValid)//
  var isValid = true
  console.log(isValid)//
  two()
}
var isValid = false
one()
