//m1: charCodeAt ==> string.
// ! without for of loop
const upperCase = str => {
  const upperCase = []
  for (let i = 0; i < str.length; i++) {
    const asciiValue = str[i].charCodeAt()
    if (asciiValue >= 97 && asciiValue <= 122) {
      temp = asciiValue - 32
      upperCase.push(String.fromCharCode(temp))
    } else if (asciiValue >= 65 && asciiValue <= 90) {
      upperCase.push(String.fromCharCode(asciiValue))
    } else if (asciiValue === 32) {
      upperCase.push(' ')
    } else {
      upperCase.push(str[i])
    }
  }
  return upperCase.join('')
}
console.log(upperCase('abc Abc   8943'))
