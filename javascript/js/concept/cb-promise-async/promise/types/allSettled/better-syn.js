const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('did')
  }, 3000)
})
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('heoo')
  }, 1000)
})
const result = Promise.allSettled([promiseOne, promiseTwo])
  .then(data => console.log(data))
  .catch(e => 'fail')

console.log(result)
