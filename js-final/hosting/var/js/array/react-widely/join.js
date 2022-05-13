// ?  join : return new array , convert array into string , all items joined to one and datatype become   string
// after each item item it add comma default we can coustomize it what to add after each item 
const elements = ['Fire', 'Air', 'Water']

console.log('====>', typeof elements.join()) //! array to string datatype convert further only string methord will apply
console.log(elements.join()) //? default case
console.log(elements.join(',')) //? default case
console.log(elements.join(89889)) //? default case
console.log(elements.join(''))
console.log(elements.join('--'))
