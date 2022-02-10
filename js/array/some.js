// some : itterate all array , return true if found else false --> even one found it return true
const items = [
    { name: 'js', price: 200 },
    { name: 'python', price: 6200 },
    { name: 'java', price: 4200 },
    { name: 'cpp', price: 5200 },
    { name: 'mysql', price: 1200 },

];
const newItems = items.some(item => item.price <= 1000)
console.log(newItems)