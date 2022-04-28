// charCodeAt syntax ==> str[i].charCodeAt()
//**  what if equal 2 char at max => return first one*/
const getMaxRepetChar = str => {
  let maxCharAscii = ''
  let maxCount = 0
  for (let i = 0; i < str.length; i++) {
    let count = 0
    let tempAsciiValue = str[i].charCodeAt()
    if (tempAsciiValue === 32) {
      continue
    }
    for (let j = 0; j < str.length; j++) {
      if (tempAsciiValue === str[j].charCodeAt()) {
        count++
      }
    }
    if (count > maxCount) {
      maxCount = count
      maxCharAscii = tempAsciiValue
    }
  }
  return String.fromCharCode(maxCharAscii)
}
console.log(getMaxRepetChar('zzppmm           kl klo'))
