const array = [4, 5, 6, 7, 8, 9, 10, 11]

// map have callback function ==> having 3 argument ==> item , index , array
//! must require to use return keyword => map need to return something 

console.log(array.map(a => a))
console.log(array.map(function (a, index) { return (a + index) }))