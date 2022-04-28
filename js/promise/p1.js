const promise = new Promise((resolve, reject) => {
  return resolve('resolve')
  reject('reject')
})
// finally
promise
  .then(res => res.json)
  .then(res => console.log(res))
  .catch(err => console.log(err)).finally
