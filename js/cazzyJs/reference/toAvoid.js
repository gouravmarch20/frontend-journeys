// ?  to avoid
// array => map , concat , spread
// object => spread operator
// ! in object
const obj = { name: 'gitman ' }
const objOne = { ...obj }
obj.name = 'gi'
console.log(obj)
console.log(objOne)
// in array =>

const arr = [1, 3]
const arrOne = [...arr]
arrOne[3] = 'k'
console.log(arr)
console.log(arrOne)
