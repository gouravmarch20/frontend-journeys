// in primitive : pass by value
const a = 5
let b = a
b++
console.log(a)
// : pass by reference  in array
let arr = [5, 33, 66]
let arrOne = arr
arrOne.push(123)
console.log(arr)
// in object

let obj = { name: 'gour' }
let objOne = obj
objOne.name = 'gourOne'
console.log(obj.name)
