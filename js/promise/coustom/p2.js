
//? promise chaning :  resolve need.js file  issue 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 2000)
})
console.log(promise) //! return promise
promise
  .then(res => {
    console.log(res)
    return res + 3
  })
  .then(res => {
    console.log(res)
    return res + 10
  })
  .then(num => {
    console.log(num)
  })
  .catch(err => console.log(err)).finally
