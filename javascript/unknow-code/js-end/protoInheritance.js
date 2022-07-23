const objOne = { a: 19 }
const objTwo = { x: 'kit' }
const objThree = { y: 'gitman' }
objOne.__proto__ = objTwo
objOne.Prototype = objThree
console.log(objOne.x)
console.log(objOne.y)
