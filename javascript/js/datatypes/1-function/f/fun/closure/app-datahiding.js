function counter () {
  var count = 0
  return function incrementCounter () {
    count++
    console.log(count);
  }
}
// console.log(count);//** can note acess */
let counter1 = counter()
counter1()
counter1()
let counter2 = counter()
counter2()
counter2()
counter1()

counter2()
counter2()