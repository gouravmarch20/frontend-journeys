const Emp = function () {
  console.log(this)//** new create empty object 
  this.name = 'gitman'
}

const empOne = new Emp()
console.log(empOne)
