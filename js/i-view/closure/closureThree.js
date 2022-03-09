// !  Closore :  a function along with  lexial socpe return



function x() {
    var a = 5
    return function y() {
        console.log(a)
    }

    // !  not just a function return , a closore return => a function along with lexial socpe return
}
const z = x()
// var a = "git"
z()





