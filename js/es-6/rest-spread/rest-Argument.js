// ? break a argument by destructring , unnecessary stored by rest operator
// when an array is passed arguments ==> arguments one take it 
const functionOne = (first, second, ...rest) => {
  console.log(rest)
  // console.log(first)
  // console.log(second)
}
functionOne([1, 22, 55, 99, 444])
//  ! we require to use array destructring && rest operator together
console.log('----------------------------- CORRECT ---------')
const functionTwo = ([first, second, ...rest]) => {
  console.log(rest)
  // console.log(second)
  // console.log(first)
}
functionTwo([1, 22, 55, 99, 444])
