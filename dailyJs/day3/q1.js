function noOfWords (sentence) {
  let trimSentence = sentence.trim()
  let lengthOfWords = 0
  for (let i = 0; i < trimSentence.length; i++) {
    if (trimSentence[i] === ' ') {
      lengthOfWords = ++lengthOfWords
    }
  }
  return lengthOfWords + 1
}

console.log(noOfWords('we are neoGrammers'))


