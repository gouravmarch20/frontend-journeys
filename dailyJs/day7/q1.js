// const str = '5565534276455423'
const str = '1234567'
function maskString (str) {
  for (let i = 0; i <= str.length; i++) {
    if (i > str.length - 4) {
      str[i] = '#'
    }
  }
  console.log(str)
}
maskString(str)
