

// let : block scope
function scope() {
    console.log(a)
    { let a = 5 }
    console.log(a)
}
scope()