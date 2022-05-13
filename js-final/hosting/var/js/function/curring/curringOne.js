// !  Closore observation : function two able to acess function one value  => lexical scope sai acess value  

// function one return a function 
//function two return value 
const add = (numOne) => numTwo => numTwo + numOne;
const result = add(2)(4)
// obserb function return a function
const functionOne = add(10)
const resultOne = functionOne(5)


// ---
console.log(result)
console.log(resultOne)

