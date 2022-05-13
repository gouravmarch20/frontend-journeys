// lexical scoping 
// return function that can acess destroyed context value ==> because it has return before destroy
// ! value not loss it retains the
const sum = (a) => {
    console.log("first argument", a)
    const c = 4;
    return (b) => {
        return a + b + c;
    }
}
const store = sum(2)
console.log(store(5))