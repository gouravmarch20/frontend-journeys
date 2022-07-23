//
let myMap = new Map([
  ['a1', 'ajay'],
  ['a2', 'gourav'],
  ['a2', 'alpha'],
  ['a3', 'iq']
])
myMap.delete('a3')
console.log(myMap)
for (const [key, value] of myMap) {
  console.log(`key ${key} -- ${value}`)
}
