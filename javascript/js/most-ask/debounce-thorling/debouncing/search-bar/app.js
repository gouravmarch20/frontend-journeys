let counter = 0
const getData = () => {
  console.log('--')
  console.log('fetch', counter++)
}
const myDebounce = (call, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      call()
    }, delay)
  }
}
const betterByDebouncing = myDebounce(getData, 100)
