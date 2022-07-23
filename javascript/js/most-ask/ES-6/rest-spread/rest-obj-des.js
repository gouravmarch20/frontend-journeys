//
// rest stored value as object
const obj = {
  ni: 'kit',
  salary: 12,
  age: 32
}
//** destructring
const { ni, ...rest } = obj
console.log(rest)
