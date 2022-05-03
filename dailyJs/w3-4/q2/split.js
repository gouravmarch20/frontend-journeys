// todo: runable code
const splitArr = (array, k) => {
  let resultArr = []
  let tempArr = []
  for (let i = 0; i < array.length; i++) {
    if (i === k) {
      resultArr.push(tempArr)
      tempArr = []
    }
    tempArr.push(array[i])
  }
  resultArr.push(tempArr)
  console.log(resultArr)
}
console.log(splitArr([1, 2, 3, 5, 7, 3, 43], 3))
