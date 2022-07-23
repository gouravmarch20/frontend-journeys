// debug => this sai we tell which object to point --> asign x , y valure and return function
// on return function we pass one more argument

let multiply = function (x, y, z) {
  console.log(x * y * z)
}
let multiplyBy = multiply.bind(this, 2, 3)
multiplyBy(5)
