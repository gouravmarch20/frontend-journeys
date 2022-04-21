//like substr , but exclude final index value
const str = 'aioicoq the generated theme'
console.log(str.substring(3))
console.log(str.substring(2, 5))//? not includes 5 index value
console.log(str.slice(2, 5))