// l1 : avoid str.length use undefined
// l2 : counter replace with count var name
const countNumberOfCharacter = sentence => {
  let count = 0
  trimSentence = sentence.trim()
  for (let i = 0; trimSentence[i] !== undefined; i++) {
    if (trimSentence[i] !== ' ') {
      count++
    }
  }
  return count
}
console.log(countNumberOfCharacter('        We are neoGrammers     '))
