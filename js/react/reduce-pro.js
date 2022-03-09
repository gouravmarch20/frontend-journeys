// reducer in object 

const users = [
    { firstName: 'John', age: 34 },
    { firstName: 'backtick', age: 34 },
    { firstName: 'uitous', age: 75 },
    { firstName: 'John', age: 75 },
    { firstName: 'John', age: 75 },
    { firstName: 'akpha', age: 12 },
];
const output = users.filter((x) => x.age < 43).map((x) => x.firstName)

console.log(output)