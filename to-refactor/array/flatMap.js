// can use flat & map together
const number = [1, 3, 4, [5]]
const number = [1, 3, 4, [67, 5]] //! no work  at one time map can ' t work in two items
const number = [1, 3,[ 4, [67, 5]]] //! no work one layer only mai it flat & map
const newArr = number.flatMap(item => item * 10)
console.log(newArr)
