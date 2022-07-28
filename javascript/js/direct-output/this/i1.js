const a = function () {
//   console.log(this)//window
  const b = function () {
    console.log(this)//window
    const c = {
      hi: function () {
        console.log(this)//c object
      }
    }
    c.hi()
  }
  b()
}
a()
