// gives methords acess that present varible inside object
const obj = {
    name: "gourav",
    sing() {
        return ("dixon" + this.name)
    },
}
console.log( obj.sing())

// same code can be acess for multiple object
function impDetail(){
    console.log(this.code)
}
const obj1 = {
    code: "6 hours"
    , impDetail: impDetail
}
const obj2 = {
    code: "8 hours"
    , impDetail: impDetail
}
obj1.impDetail()
obj2.impDetail()