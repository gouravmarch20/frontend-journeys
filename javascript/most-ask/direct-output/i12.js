let funClosure = function () {
  var a = 5
  return function () {
    return a *3
  }
}
const result = funClosure()()
console.log(result)
// closure