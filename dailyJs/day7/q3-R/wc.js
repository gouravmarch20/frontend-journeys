//m1 >>  += asign at right ==> failed to asign at left 
const reverseWord = str => {
  let revWord = ''
  let tempWord = ''
  // console.log(str[9]);
  for (let i = 0; i < str.length; i++) {
    tempWord += str[i]
    if (str[i] === ' ') {
      tempWord += str[i]
      revWord += tempWord
      console.log(tempWord)
      console.log(revWord);
      tempWord = ''
      continue
    }
  }
  revWord += tempWord
  //   console.log(revWord)
}

console.log(reverseWord('Welcome to neog Camp'))
