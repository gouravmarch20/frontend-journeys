// Pure function : no change it outer varible ,same input same output 

const array = [1, 4, 5, 6, 7]
const arrayTwo = [1, 4, 5, 6, 7]
// ? SIDE EFFECT 
function mutateArray(arr) {
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.push("side effects")
}
mutateArray(array)
console.log(array)
//! TO AVOID SIDE EFFECT ==> WE USE PURE FUNCTION concept

function pureF(arr) {
    const newArray = [...arr]
    newArray.pop()
    newArray.pop()
    return newArray
}
function pureFone(arr) {
    return arr.map(item => item * 2)
}
console.log(pureF(arrayTwo))
console.log(pureFone(arrayTwo))
