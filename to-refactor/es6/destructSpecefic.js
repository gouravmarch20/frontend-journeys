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
