// += , *=  ------> save previous value while asignment operator asign as new value
// ! logic ==> sum = sum + toAdd ==> sum += toAdd

const str = 'wearene'
let upperCase = ''
for (let i = 0; i < str.length; i++) {
  upperCase += str[i].toUpperCase()
}
console.log(upperCase)
