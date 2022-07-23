const job = state => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('success')
    } else {
      reject('error')
    }
  })
}

let promise = job(true)
promise
  .then(data => {
    console.log(data)

    return job(false)
  })
  .catch(error => {
    console.log(error)
    return 'error caught but i will return as promise & run by '
  })
  .then(data => {
    console.log(data)
    return job(true)// unhandled promise bellow no promise 
  })
  .catch(err => console.log(err))
