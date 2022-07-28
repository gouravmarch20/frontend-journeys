const users = [
  { firstName: 'gourav', age: 18 },
  { firstName: 'shiva', age: 28 },
  { firstName: 'alpha', age: 38 },
  { firstName: 'bulma', age: 32 },
  { firstName: 'gourav', age: 22 },
  { firstName: 'gourav', age: 18 }
]

const result = users.filter(user => user.age > 30).map(user => user)
console.log(result);
