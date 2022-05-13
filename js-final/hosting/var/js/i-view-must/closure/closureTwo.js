const sum =  (a, b, c)=> {
    // 
    return {
        getSumTwo: function () { return a + b },
        getSumThree: function () { return a + b + c }
    }
}
// q 1 
let store = sum(3, 2, 5)
console.log(store.getSumTwo())
console.log(store.getSumThree())
// testing

console.log("-------- testing two ------")
store = sum(20, 30, 50)
console.log(store.getSumTwo())
console.log(store.getSumThree())