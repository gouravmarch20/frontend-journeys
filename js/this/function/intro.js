// this : is dynamically scoped  because depending how the function is call , not lexically scope --> to avoid this by arrow function
// ? arrow function ==> the value of this depend where the arrow function is call  , not how we are calling function=> by object or rough call
// *** arrow function work lexical

const obj = {
  name: 'goku',
  sayHello: function () {
    console.log('hello --> ', this.name)

    // *** by arrow --> it call inside the obj ==> object so it point to them
    const sayBye = () => {
      console.log('bye --> ', this.name)
    }
    sayBye() //**
  }
}
obj.sayHello()
