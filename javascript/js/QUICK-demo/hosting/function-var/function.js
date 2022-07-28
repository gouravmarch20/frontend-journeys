
// not a function : error
funOne()

var funOne = function () {
  console.log('hello')
}
funTwo()

var funTwo = () => {
  console.log('arrow function')
}
