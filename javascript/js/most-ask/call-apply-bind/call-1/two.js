// arrow function case
const printName = () => {
  console.log(`${this.firstName} ${this.lastName} `)
}
// object
let obj1 = {
  firstName: 'gourav',
  lastName: 'mishara'
}

let obj2 = {
  firstName: 'vegeta',
  lastName: 'sen'
}
// function borrowing
printName.call(obj1)
printName.call(obj2)
