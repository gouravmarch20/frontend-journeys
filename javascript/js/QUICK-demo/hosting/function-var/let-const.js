//ReferenceError: 'funOne' not found --> TDZ

funOne()

const funOne = function () {
  console.log('hello')
}
