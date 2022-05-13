// l1>> unnessary string itteration , easily done with array -> because we need word as it is
// m1 : space handling issue
// TODO: CONFUSION IN SPLIT WORKING
const reverseWord = str => {
    // ? in split""==>  it remove all " "
    // ? after each item we add space ---> accept last word because space in char less than 1 
  let result = ''
  const strArr = str.split('o')
  console.log(strArr);
  for (let i = strArr.length - 1; i >= 0; i--) {
    result += strArr[i]
    if (i > 0) {
      result += ' '
    }
  }
  return result
}

console.log(reverseWord('Welcome   to neog Camp'))
