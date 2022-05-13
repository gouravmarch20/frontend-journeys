const employee = {
  address: {
    city: 'delhi'
  }
}

// ! if dout on key then we default asign value
const {
  id = 55555,

  address: { city = 'mumbai' }
} = employee

console.log(id)
console.log(city)
// ! important
const companay = {
  name: 'tirxon',
  locations: ['delhi', 'mumbai', 'banglore']
}
// ? object destruct mai array store , then by array destruct we access
const {
  locations: [firstPreferred, secondPrefferred]
} = companay
console.log(firstPreferred)
console.log(secondPrefferred)
