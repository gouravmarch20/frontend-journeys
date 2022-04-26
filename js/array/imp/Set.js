/*
set : 
 - always contain unique value in array form
 - it's datatype is object & it is not an array 
 - to convert it into array we use ===>  [..]
** we use to get unique value in array

*/

const arr = [1, 3, 3, 5, 1, 2, 3]
console.log(new Set(arr))
console.log([...new Set(arr)])
// TODO: CAN WE USE SET IN OBJECT