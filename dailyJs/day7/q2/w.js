// m1 : str[str.length - 1 - i] ==> forgot str[] wrapper
const isPalindrome = str => {
  //   console.log(str.length)
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(isPalindrome('1219932'))
