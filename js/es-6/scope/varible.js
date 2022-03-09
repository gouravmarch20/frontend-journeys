// let , var ,const
// let , const -> block level scope , temporal dead zone -> use first asign later not work : hosting 

// PRO TIP : use let & const mostly , preffer const more than let --> object ref issue save

// const a = ()=> 4 ===> means function a only 1 exit in whole module 

console.log(a)
if (true) {
    var a = 5;
    // let a = 4
}