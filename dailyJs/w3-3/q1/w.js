// Input:
obj = {
  name: 'Doraemon',
  age: 5,
  hairColor: 'none',
  eyes: 'oval'
}
const inverseObj = obj => {
  let newObj = {}
  for (const [key, value] of Object.entries(obj)) {
    newObj[value] = key
  }
  return newObj
}
console.log(inverseObj(obj))
