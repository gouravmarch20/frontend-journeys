const array = [
    { name: 'foo', age: 30 },
    { name: 'uixer', age: 40 },
    { name: 'gourav', age: 60 },
];
const totalAge = array.reduce((p, c) => p + c.age, 0)
console.log(totalAge)