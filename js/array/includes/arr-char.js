//! Itteration each char ==> INCLUDES working
// filter itterate each item -> string mai apply includes property
const brandData = ['puma  ad', 'adiddas', 'wildcraft', 'levis', 'celio']

console.log(brandData.filter(b => b.includes('a')))
console.log(brandData.filter(b => b.includes('')))//? no space ==>each char have no space
console.log(brandData.filter(b => b.includes(' ')))//? only 1 item have empty space
console.log(brandData.filter(b => b.includes()))//nothing given
