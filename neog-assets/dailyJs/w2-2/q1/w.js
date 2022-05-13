const maskLast4WithChar = (str, masksWith) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i > str.length - 4 - 1) {
      result += str[i]
      continue
    }
    result += masksWith
  }
  return result
}
console.log(maskLast4WithChar('string', '#'))
