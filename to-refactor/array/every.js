// if all match condition

const arr = [
  { name: 'xeron', price: 12 },
  { name: 'goku', price: 55 },
  { name: 'vegeta', price: 77 },
  { name: 'dixon', price: 88 },
  { name: 'railtel', price: 10 }
]
const isGreaterThan10 = arr.every(item => item.price > 10)
const isGreaterThan9 = arr.every(item => item.price > 9)
console.log(isGreaterThan10)
console.log(isGreaterThan9)
