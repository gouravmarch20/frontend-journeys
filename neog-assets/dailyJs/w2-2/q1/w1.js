const maskString = string => {
  if (string.length < 4) return string
  else {
    // masking strings with 4 or more characters in it only
    let result = '',
      i = 0
    for (; i < string.length - 4; i++) {
      result += '#'
    }
    for (; i < string.length; i++) {
      result += string[i]
    }
    return result
  }
}
const str = 'ring'
const str1 = 'string io'
console.log(maskString(str))
console.log(maskString(str1))
