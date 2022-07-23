//** not use arrow function here
const printName = (age, hometown) => {
  console.log(
    `${this.firstName} ${this.lastName} age :${age} address -  ${hometown}`
  )
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
printName.call(obj1, 434, 'delhi')
printName.call(obj2, 14, 'ranchi')
