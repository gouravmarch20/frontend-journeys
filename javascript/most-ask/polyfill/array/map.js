const arrayOne = [3, 12, 'gitman', 44]

Array.prototype.myMap = function (cb) {
  let result = []
  for (let index = 0; index < this.length; index++) {
    result.push(cb(this[index], index, this))
  }
    console.log(result)
  return result
}
let result = arrayOne.myMap((item , index) => {
    console.log(index);
  return (item = item + 10)
})
console.log(result)
