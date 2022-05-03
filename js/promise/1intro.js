console.log('0')
// ! promise work await --> until not reject or reject ==> wait 
let p = new Promise((resolve, reject) => {
  console.log('1')
  if (true) {
    resolve('dii')
    console.log('2')
  }
})
console.log(' --- 3')
// ! handing promise run in async way
p.then(res => console.log(res))
  .catch(err => err)
  .finally(() => console.log('i will run no mater what '))

console.log(' --- 4')
