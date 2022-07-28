//  show hof with example
/* // ** NEED OF HOF : avoid individual function

1. simply in hof we tell which function to run by passing as argument that function as an argument ,

2. run cb later after performing some logic before cb function call
*/
const add = (a, b) => a + b

const sub = (a, b) => a - b
const mul = (a, b) => a * b

const calculator = (num1, num2, operator) => {
  return operator(num1, num2)
}
console.log(calculator(5, 4, add))
console.log(calculator(5, 4, sub))
console.log(calculator(5, 4, mul))
