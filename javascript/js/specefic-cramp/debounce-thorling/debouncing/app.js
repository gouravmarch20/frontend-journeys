// m1 : argument keyword fail in arrow function\\\
let counter = 0
const getData = () => {
  console.log('t4w6fh data', +counter++)
}
const debounce = function (fn, delay) {
  let timer // closure edge
  return function (...args) {
    let context = this //window
    let args = arguments
    // clearInterval(timer)//** without this after delay it go to cb queue to ec */
    timer = setTimeout(() => {
      fn.apply(context, args)
      //   getData.apply(context, args)
    }, delay)
  }
}
const betterByDebouncing = debounce(getData, 800)
