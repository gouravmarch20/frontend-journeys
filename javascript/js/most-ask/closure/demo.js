const sum = (num1) => {
  let result = num1 + 4
  return (num2) => {
    return result + num2
  }
}
const result = sum(4)
console.log(result(10));