// ? nullish colescing
// if left true then return right , if right false return right
console.log(true ?? 5)
console.log(false ?? 5)
//TODO:  nullish coalescing
const defaultAgrA = (a, b) => {
  b = b ?? 5
  return a + b
}
console.log(defaultAgrA(5))
