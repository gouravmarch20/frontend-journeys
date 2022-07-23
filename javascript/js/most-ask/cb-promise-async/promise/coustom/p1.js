// promise has 1 C.B function ==> that function has two params --> resolve  , reject

//finally run -> in both case not reject / resolve

// l1> the movement all promise code excute then reject / resolve -> will be handle by .then/.catch
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: 'goku', age: 32 })
    console.log('promise start')
    reject('some issue occured - the first on is final')
    reject('deep drive')
    console.log('promise execution end')
  }, 2000)
})
console.log(promise) //! return promise
// to resolve return promise --> .then => if resolve --> .catch : if reject
promise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => {
    console.log('---   run  no mater what the conditon is')
  })
