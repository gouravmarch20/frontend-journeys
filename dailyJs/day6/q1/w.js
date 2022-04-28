// m1> asked count no char ===> char not include space but i counted it
const countNumberOfCharacter = str => {
  let counter = 0
  for (const value of str) {
    if (value === ' ') {
      continue
    }
    counter++
  }
  return counter
}
console.log(countNumberOfCharacter('        We are neoGrammers     '))
