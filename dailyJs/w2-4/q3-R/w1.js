// l1>> -1 asign to default case ==> repetatiopn never can vbe negative ==>?
const printMostRepetedCharcter = sentence => {
  const trackOfCharacters = {}
  let max = { letter: '', repeatedNumberOfTimes: -1 }
  for (let i = 0; i < sentence.length; i++) {
    trackOfCharacters[sentence[i]] = trackOfCharacters.hasOwnProperty(
      sentence[i]
    )
      ? trackOfCharacters[sentence[i]] + 1
      : 1
  }

  for (const key of Object.keys(trackOfCharacters)) {
    if (trackOfCharacters[key] > max.repeatedNumberOfTimes) {
      max.repeatedNumberOfTimes = trackOfCharacters[key]
      max.letter = key
    }
  }
  return max
}
console.log(
  `${
    printMostRepetedCharcter('aaaiiiiiooo').letter
  } is the most repeting char ${
    printMostRepetedCharcter('aaaiiiiiooo').repeatedNumberOfTimes
  }`
)

// console.log(
//   `${printTheMostRepeatedCharacter('aaaass').letter} is repeated highest ${
//     printTheMostRepeatedCharacter('aaaass').repeatedNumberOfTimes
//   } number of times`
// )
