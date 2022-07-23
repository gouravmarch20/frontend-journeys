
// 
function outer () {
  function inner () {
    //   acessing let varible by lexical scoping

    console.log(a)//** closure , pass as of a  and remain in scope even EC gone
  }
  let a = 434
  return inner
}
outer()()