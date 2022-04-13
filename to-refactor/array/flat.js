// nested array flat
const number = [1, 3, 4, [5, 6], 7, [8, [9, 10]]]
console.log(number)
const flatLevelOne = number.flat()
console.log(flatLevelOne)

const flatLevelTwo = flatLevelOne.flat()
console.log(flatLevelTwo)
