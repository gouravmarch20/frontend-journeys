// rest => collect 
// spread => avoid ref issue , new data create create

let obj = { name: 'n', value: 44 }
let objOne = { class: 76, point: "zero", phoneNumber: "534" }
// ! spread => break each => create a new object by combining then 
console.log({ ...obj, ...objOne })

// destructring & rest 
const { point, ...rest } = objOne
console.log(point, rest)