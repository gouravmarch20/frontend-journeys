// ? hof : a fuction which take function as argument or return function
// ! y : high order function, x : callback function
function x() {
    console.log("first")
}

function y() {
    console.log("---")

    x()
}
y()