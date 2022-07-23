const myBtn = document.getElementById('my-btn')
const mythrottle = (fn, d) => {
  return function (...args) {
    myBtn.disabled = true
    setTimeout(() => {
      fn()
    }, d)
  }
}
const newFun = mythrottle(() => {
  myBtn.disabled = false

  console.log('user clicked')
}, 1000)
