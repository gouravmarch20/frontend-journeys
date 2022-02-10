
// filter return an array --> only that who had match the given case
const items = [
    { name: 'js', price: 200 },
    { name: 'python', price: 6200 },
    { name: 'java', price: 4200 },
    { name: 'cpp', price: 5200 },
    { name: 'mysql', price: 1200 },

];
const filteredItems = items.filter(item => item.price >= 5000)
console.log(filteredItems)