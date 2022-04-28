// what it do with function ==> if varible depend fuction set undefine first , else store function define in global context yes there is a function

//   fuction 
getName()
function getName() {
    console.log("technical")
}
//  function as varible 
// getA() //  ! ERROR => HOSTING SET UNDEFINE TO varible
const getA = () => {
    console.log("first")
}

getA()//correct way