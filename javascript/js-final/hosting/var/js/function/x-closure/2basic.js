function a () {
  var a = 5
  function b () {
    console.log(a)
  }
  return b
}
const funb = a()
funb()
