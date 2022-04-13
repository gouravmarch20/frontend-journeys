// array of objects

const cart = [
  { item: 1, name: 'guava', price: 55 },
  { item: 2, name: 'ete', price: 535 },
  { item: 3, name: 'orange', price: 5 },
  { item: 4, name: 'rai', price: 65 },
  { item: 5, name: 'apple', price: 95 },
  { item: 6, name: 'water', price: 51 }
]
const [productOne] = cart
const [{ name }] = cart
console.log(productOne)
console.log(name)
