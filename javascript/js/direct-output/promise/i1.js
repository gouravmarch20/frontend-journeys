//? promise chaning :  if catch block hit still .then run 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(5)
    reject(5)
  }, 2000)
})
console.log(promise) //! return promise
promise
  .then(res => {
    console.log(res)
    return res + 3
  })
  .catch(err => {
    console.log(err)

    return err + 10
  })
  .then(res => {
    console.log("i am running still")
    return res + 10
  })
