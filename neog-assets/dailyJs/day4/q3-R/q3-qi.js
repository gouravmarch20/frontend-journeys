function getReverseWord (item) {
  let singleWord = []
  for (let i = item.length - 1; i >= 0; i--) {
    singleWord.push(item[i])
  }

  return singleWord.join('')
}
function reverseCharactersOfWord (str) {
  let reverseSentence = []
  const wordArr = str.split(' ')
  for (let i = 0; i < wordArr.length; i++) {
    reverseSentence.push(getReverseWord(wordArr[i]))
  }
  return reverseSentence.join(' ')
}

console.log(reverseCharactersOfWord('we are    afs'))
