// ? to collect data & store in array form
const reverseNum = (...num) => {
  console.log(num)
}
reverseNum(3298)
const reverseNumOne = (...str) => {
  console.log(str)
}
reverseNumOne('alpha')
// rest & spread case
const findMin = (...args) => console.log(...args)

console.log(findMin(3, -12, 5, 9, 1, -9))
