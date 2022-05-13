// function call by object ==?  this pointing to that object
const obj1 = {
  age: 43,
  class: 3,
  displayAge: function () {
    console.log(this.age, '---- ', this.class)
  },
  pointingWho: function () {
    console.log(this)
  }
}

obj1.displayAge()
obj1.pointingWho()
