const arrOne = [10, 20, 30, 40]
// arrOne.reduce((acculator, currentValue, index, arr) => {}, initalValue)
Array.prototype.myReduce = function (cb, initalValue) {
  let accumulator = initalValue ? initalValue : this[0]
  for (let index = initalValue ? 0 : 1; index < this.length; index++) {
    accumulator = cb(accumulator, this[index], index, this)
  }
  return accumulator
}
const result = arrOne.myReduce((acc, value, index, arr) => acc + value, 0)
console.log(result)
