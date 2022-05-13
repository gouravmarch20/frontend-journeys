const reverseNum = num => {
    let numStr = num.toString()
  let reverseNum = ''
  for (let i = 0; num > 9; i++) {
    digit = num % 10
    reverseNum += digit
    num = num / 10
  }
  console.log(reverseNum);
//   reverseNum += num
}
console.log(reverseNum(3212))
