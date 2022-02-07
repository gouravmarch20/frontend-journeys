// 
const defaultAgr = (a, b) => {
    b = b || 5
    return a + b
}
console.log(defaultAgr(5))
//TODO:  nullish coalescing
const defaultAgrA = (a, b) => {
    b = b ?? 5
    return a + b
}
console.log(defaultAgrA(5))

