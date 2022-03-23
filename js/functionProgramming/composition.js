// output of one function is input to other function
const add = (num1, num2) => num1 + num2
const double = num => 2 * num
// !  add function output  is input to clg function ,
console.log(add(2, 3))
//? 
console.log(double(add(2, 3)))
