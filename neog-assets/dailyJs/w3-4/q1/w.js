const findPair = (arr, target) => {
  //   let num1, num2
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] + arr[i] === 10) {
        return `the pair is ${arr[i]}  ${arr[j]} `
      }
    }
  }
}
console.log(findPair([1, 8, 7, 8, 7, 3], 10))
