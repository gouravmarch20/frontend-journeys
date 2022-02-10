// every : itterate all array -->  return true if all valid the given case  else false
const items = [
    { name: 'js', price: 200 },
    { name: 'python', price: 6200 },
    { name: 'java', price: 4200 },
    { name: 'cpp', price: 5200 },
    { name: 'mysql', price: 1200 },

];
const newItems = items.every(item => item.price <= 5000)
console.log(newItems)