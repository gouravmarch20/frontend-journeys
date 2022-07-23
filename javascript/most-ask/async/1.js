// setTime gone to webApi --> come to main thread we it's free, main tread only get free after running whole code and keep push async code in webApi

setTimeout(() => {
  console.log('async')
}, 0)
let arr = []
for (let i = 0; i < 1000; i++) {
  arr.push('ds')
}
console.log(arr)
