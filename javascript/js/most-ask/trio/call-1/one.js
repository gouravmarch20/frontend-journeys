let userDetailOne = {
  firstName: 'gourav',
  lastName: 'mishara',
  printName: function () {
    console.log(`${this.firstName} ${this.lastName} `)
  }
}
let userDetailTwo = {
  firstName: 'goku',
  lastName: 'sen'
}
// userDetailOne.printName()
userDetailOne.printName.call(userDetailTwo)
