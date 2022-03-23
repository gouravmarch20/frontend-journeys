// find the number 
const array = [3, 1, 6, 4, 2, 5, 1]
oddArray = (number) => number % 2 === 0
console.log(array.reduce((a, c) => {

    if (c % 2 !== 0) {
        return (a + c)
    }
    return a
}
    , 0)
)
const value = array.reduce((a, c) => (c % 2 === 0) ? { ...a, sumOfEven: c + a.sumOfEven } : { ...a, sumOfOdd: c + a.sumOfOdd }, { sumOfOdd: 0, sumOfEven: 0 })

console.log(value)
console.log(`tested no mutability`, array)