const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'hiiii')
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 800, 'stuff worked')
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'promise 3')
})

let data = Promise.all([p1, p2, p3])

data.then(res => {
  console.log('then ', res)
})
