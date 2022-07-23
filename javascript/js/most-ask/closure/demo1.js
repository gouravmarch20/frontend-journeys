const sum = num1 => {
  let result = num1 + 4
  return {
    getSumTwo: function () {
      return num1 + 43
    },
    getSumThree: function () {
      return num1 + 43 + result
    }
  }
}
const result = sum(4)
console.log(result.getSumThree(30, 40, 35))
