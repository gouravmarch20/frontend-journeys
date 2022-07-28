// EC  , GC : 2 PAHSE code execution --> 1. Memory creation , 2. Code execution
//l1: params are var type varible proof we can modify it
var n = 2
const print = () => 5
function square (num, cb) {
  console.log(cb)
  var cb = 5
  console.log(cb);

  var ans = num * num
  return ans
}
var square2 = square(n, print)
