// ** array destructring && rest operator
const functionOne = (first, second, ...rest) => {
  console.log(rest)
  // console.log(first)
  // console.log(second)
}
functionOne([1, 22, 55, 99, 444])
console.log('----------------------------- CORRECT ---------')
const functionTwo = ([first, second, ...rest]) => {
  console.log(rest)
  // console.log(second)
  // console.log(first)
}
functionTwo([1, 22, 55, 99, 444])
