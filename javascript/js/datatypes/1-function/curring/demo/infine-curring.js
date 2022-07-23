
// TODO: HONEST DRY RUN 
const add = numOne => {
  return function (numTwo) {
    if (numTwo) return add(numOne + numTwo)
    return numOne
  }
}
console.log(add(4)(5)(5)(9)())
