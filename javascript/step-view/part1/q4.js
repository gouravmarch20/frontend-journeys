// ! IMPORTANT: const will change in object ==> change by reference 
// ? we can change property in const , can't assign an data in value 

// ? property can change we directly point to object key & asigning it new value
const myData ={name : "tanay" , hobby : "panting"}
myData.name = "gourav"
console.log(myData)
// ? this is const so  object can 't be reinalize 
myData = {name : "git" , hobby:"lit"}
console.log(myData)
