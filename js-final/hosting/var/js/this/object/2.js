// object without function --> this point to window  object

const obj1 = {
    age: 43,
    class: 3,
    name: console.log(this)
  }
  
  obj1.name
  // obj1.name()//? error not a function
  