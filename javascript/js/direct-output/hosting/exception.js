//no var / let in line 6 , 13

var num1 = '------- tyson ---'
const print = () => {
  console.log(num1)
  num1 = 43
  console.log(num1)
}
print()
let num2 = '------- tyson ---'
const print2 = () => {
  console.log(num2)
  num2 = 43
  console.log(num2)
}
print2()
