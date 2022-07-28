// array like object or arr inside arr  -> with asending order key number to string
const anObj = { 100: 'a', 2: 'b', 7: 'c', gi: 'd', git: 'e' }
console.log(Object.entries(anObj))
// array de3structreing take key valee --> to display array value
const obj = { n: 5, i: 7, c: 9 }

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`)
}
