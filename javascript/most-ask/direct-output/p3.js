// TODO: https://www.youtube.com/watch?v=-8XxBWiWKlc
const job = state => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('success')
    } else {
      reject('error')
    }
  })
}
const promise = job(true)
promise
  .then(data => {
    console.log(data)

    return job(true)
  })
  .then(data => {
    if (data !== 'victory') {
      throw 'Defeat '
    }
    return job(true)
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
    return job(false)
  })
  .then(data => {
    console.log(data)
    return job(true)
  })
