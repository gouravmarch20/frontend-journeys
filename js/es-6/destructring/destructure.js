// destructure : always on left side , block level scope mai widely use else many varible name

// arrayDestructring : item name not matter 
const arr = [44, 42, 88, 7, 90]
const [xeron, item2, item3, ...rest] = arr
console.log(xeron, item2, item3, rest)



//  key name must same then only asing , order may differ
const obj = { name: "gourav", salary: "v3 ", roleNo: 44, }
const { salary, name, roleNo } = obj
console.log(name, salary, roleNo)



// destructuring && rest together in function argument :
//!  destructuring ==> array item asign to each other item 
//! rest opetator taking pending item 
restArr = ([first, second, ...rest]) => console.log(first, second, rest)

// restArr([1, 22, 55, 99, 444])
//! without array destructuring it asign all in  1 varible
//  restArr = (first, second, ...rest) => console.log(first, second, rest)