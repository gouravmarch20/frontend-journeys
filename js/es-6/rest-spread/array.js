
// ! ref issue also solve : spred & asing

// rest ==> store in array form 
const resExample = (a, b, ...rest) => console.log(rest + "--->>>" + rest.length)
resExample(1, 3, 5, 6, 9)
//spread ==> break into individual
const array = [5, 9, 10, 11]
const arrayOne = [1, 2, 3, 4, 5, 6]
console.log([arrayOne, array])
// spread ==> break into individual & then combined it into Array  ==> no ref issue new array is created
console.log([...arrayOne, ...array])

