function toSentenceCase (sentence) {
  let trimSentence = sentence.trim()
  for (let i = 0; i < sentence.length; i++) {
    if (trimSentence[i] === ' ') {
      // console.log(  trimSentence[i + 1].toUpperCase() )
      // FIXME:
      trimSentence[i + 1] = 'A'
      // trimSentence[i + 1].toUpperCase()
      console.log(trimSentence)
    }
  }
  return trimSentence
}

console.log(toSentenceCase('we are neogramemer knight'))
