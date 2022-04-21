
const replace = ([...array], replaceThis, replaceWith) => {
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i]
    if (currentValue === replaceThis) {
      array[i] = replaceWith
    }
  }
  return array
}

console.log(replace([1, 5 , 3 , 5 , 6 , 8], 5, 10))
