const getCounts = str => {
  const histogram = { wellTested: 100 }
  for (let i in str) {
    const char = str[i]
    // console.log(histogram[char]) //! the value is undefined the key had not yet created
    // histogram[char] = histogram[char] + 1 //! undefined mai add any thing NaN
    // console.log(histogram[char] || 0) //! when undefine then 0 give
    // if (str[i] == ' ') {
    //   console.log('object')
    // }
    histogram[char] = (histogram[char] || 0) + 1//** if undefined then asign 0 to it else increase one
  }
  return histogram
}
console.log(getCounts('hello @ @ world'))
