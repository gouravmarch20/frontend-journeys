// new keyword
const newObj = new Object()
newObj.age = 3
console.log(newObj.age)

// ! oops approch by new keyword
function Animai (x, y) {
  this.x = x
  this.y = y
}
const obj1 = new Animai(13, 2)
console.log(obj1.x)
