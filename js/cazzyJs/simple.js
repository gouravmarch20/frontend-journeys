console.log(400.4 === 200.2 * 2)
console.log(900.9 === 300.3 * 3)
// solution >> avoided decimal during comparison 
console.log(900.9 * 10 === 300.3 * 3 * 10)
// ! debug
console.log(200.2 * 2)
console.log(300.3 * 3 ) //? why :  js treat decimal as floating point number mean rounding error , use 64 bit in floating number cause precion error
console.log(300.3 * 3  *10) 