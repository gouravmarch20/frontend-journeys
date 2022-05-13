// Promise have 1 cb function & that cb function has two argument as function
// Promise return another promise  ---> we handle //** .then : if 

const handleReturnPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise had been resolved')
  }, 2000)
})

handleReturnPromise.then(() => {
  console.log('object')
})
