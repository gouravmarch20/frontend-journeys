const multiple = (a, b) => a * b
const curriedMultiple = a => b => a * b
// 
const curriedMultipleBy7 = curriedMultiple(7)
const curriedMultipleBy8 = curriedMultiple(8)
//
console.log(curriedMultipleBy7(4))
console.log(curriedMultipleBy7(7))
console.log(curriedMultipleBy8(5)) 