// ? nullish colescing
// if left side undefined or null ==> then right side run
console.log(true ?? 5)
console.log(false ?? 5)
console.log(undefined ?? 5)
console.log(null ?? 5)
const defaultAgrA = (a, b) => {
  b = b ?? 5
  return a + b
}
console.log(defaultAgrA(5))
let users = {
  name: ''
}
console.log(users.name ?? '-- unknow key')

