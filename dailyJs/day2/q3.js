const smallLetter = 'my name is satyam'

const makeFirstLetterCapital = str =>
  str[0].toUpperCase() + str.slice(1).toLowerCase()

const words = smallLetter
  .split(' ')
  .map(makeFirstLetterCapital)
  .join(' ')
