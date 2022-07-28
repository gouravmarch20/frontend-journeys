// map : return nothing , for Loop syntax small syntax to itterate array ,no return keyword require

// no ref issue means not modify real array
const array = [3, 5, 34]
console.log(array.forEach(i => i * 3))// return undefine
console.log(array) // no ref issue
// AOO
const items = [
  { name: 'js', price: 200 },
  { name: 'python', price: 6200 },
  { name: 'java', price: 4200 },
  { name: 'cpp', price: 5200 },
  { name: 'mysql', price: 1200 }
]
items.forEach(item => console.log(item.name))
