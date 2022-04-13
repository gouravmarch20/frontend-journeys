// in object destructing no squence matter, name of key must be same then only it asign ,
//  futher we can give coustom name to it 
const employee = {
  id: '1',
  name: 'gourav',
  age: 30,
  depertament: 'ui/ux',
  address: {
    city: 'delhi'
  }
}
const {
  id = 55555,
  name,
  fullName = 'set value if not that key available',
  age: myAgeCoustom,
  depertament,
  address: { city }
} = employee

console.log(id) //! normal
console.log(city) //! deep
console.log(myAgeCoustom) //! coustom name
console.log(fullName)
