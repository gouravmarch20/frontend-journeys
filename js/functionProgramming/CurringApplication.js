const a = greating => msg => ` ${greating} , say welcome ${msg}`

const userMessage = a("trixoon")

// ! can be used later multiple times 
console.log(userMessage(" gourav"))
console.log(userMessage("gotan"))