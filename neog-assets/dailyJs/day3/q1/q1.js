const noOfWords = sentence => {
  let trimSentence = sentence.trim()
  let count = 0
  for (let i = 0; i < trimSentence.length; i++) {
    if (trimSentence[i] === ' ' && trimSentence[i + 1] === ' ') continue
    else if (trimSentence[i] === ' ') count++
  }
  return count + 1
}

console.log(noOfWords('    we are    neoGrammers i'))
