// here i has not block scope for => loop because it not fall in block
const arr = [1, 2]
let i = 0
for (; i < arr.length; ) {
  i++ 
}
console.log(i);