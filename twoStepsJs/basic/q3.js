// ? var , let , const
// ! TODO: EXAMPLE OF ALL CASE ==> specially block sope , hosting ,
// var : have function level scope , if not wrap in fuction it has global scope , can be redeclared

/* let : 
- block scope , 
- declaraion/  allcoated memory & assing  it value in next line possible
- reinalize possible
- it is hosted by hosting  but in temp dead zone

*/
/* const : 
can not be re-declare with in its scope  
- must be initalized value at declaration the time  

// ! ERROR ;
const a ;
a = 5 
*/

// let , var : core
function consoleNum () {
  var num = 10
  if (true) {
    let num = 5
    console.log(num)
  }
  console.log(num)
}
consoleNum()
function constCase () {
  const num = 10
  if (true) {
    // let const = 5 //! error because const can not be reinalize in its scope
    console.log(num)
  }
  console.log(num)
}
consoleNum()
