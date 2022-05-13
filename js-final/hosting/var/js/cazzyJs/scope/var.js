// var has function level scope 

function a (){
    var numOne = 32
    console.log(numOne)
}
a()
console.log(numOne)//! error