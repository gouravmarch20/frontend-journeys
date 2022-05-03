// l1>undefined falsey value => inverse true value
// l2> obj[key] = 4 ===> if 1 value then auto asign else ===> obj[key].fieldName  = 5
// l3> for in loop use here
// TODO DEBUG CORE
const tempObj = { d: 5 }
console.log(tempObj['a'])
console.log(!tempObj['a'])
// adding key & value
tempObj['a'] = 0
tempObj['b'] = 984
console.log(tempObj)
// increasing  count
tempObj['a']++
tempObj['b'] += 15
console.log(tempObj)

const getCounts = str => {
  const histogram = { wellTested: 100 }
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!histogram[char]) histogram[char] = 0
    histogram[char]++
  }
  return histogram
}
console.log(getCounts('hello @@   world'))
