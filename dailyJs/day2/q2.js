//
const array = ['a', 'b', 'c', 'd', 'e', '']

const getElementIndex = (array, key) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === key) {
      return index
    }
  }
  console.log('first')
  return -1
}
console.log(getElementIndex([1, 5, 6, 7, 3, 8, 7, 4]), 7)
