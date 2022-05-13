// this application ==> object using same function
const printName = function () {
  console.log(this.name)
}
const obj1 = {
  name: 'goku',
  printName: printName // *** printName mai assign function
}

const obj2 = {
  name: 'vegeta',
  printName //** es - 6 feature key value same name then keyname only fine
}
//
obj1.printName()
obj2.printName()
