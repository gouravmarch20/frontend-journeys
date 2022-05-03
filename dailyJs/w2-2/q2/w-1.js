// l1 >> str.length save -> avoid reusing
const isPalindrome = str => {
    const lengthOfStr = str.length
    let j = lengthOfStr - 1
    for (let i = 0; i < lengthOfStr / 2; i++) {
      if (str[i] !== str[j - i]) {
        return false
      }
    }
    return true
  }
  console.log(isPalindrome('123A321'))
  