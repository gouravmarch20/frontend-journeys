// if left side falsy value then right side overlap

let value = ''
let valueOne = false
let valueTwo = undefined
console.log(valueTwo || 5)
console.log(value || valueOne || valueTwo || 5)
const defaultAgr = (a, b) => {
  b = b || 5
  return a + b
}
console.log(defaultAgr(5))
