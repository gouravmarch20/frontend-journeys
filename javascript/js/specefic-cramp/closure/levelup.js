function z() {
    var b = 900
    console.log("outer scope");
    return function x() {
        var a = 7;
        console.log(a)
        return function y() {
            console.log(a, b)
        }
        // y()
    }
    // x()
}
z()// => return function x  

z()() // acess fuction x , return function y
z()()()//acess function y , return nothing
console.log(z())
console.log(z()())
console.log(z()()())