const copySmallerStringToBigger = (str1, str2) => {
  let copiedStr = ''
  if (str2.length > str2.length) {
    for (const value of str1) {
      copiedStr += value
    }
    copiedStr += ' '

    for (const value of str2) {
      copiedStr += value
    }
  } else {
    for (const value of str2) {
      copiedStr += value
    }
    copiedStr += ' '

    for (const value of str1) {
      copiedStr += value
    }
  }
  return copiedStr
}
console.log(copySmallerStringToBigger('smaller String', 'bigger String'))
