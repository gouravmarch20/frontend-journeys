
// TODO: this arrow function point --> confusion in definct
let user = {
  username: 'goku',
  p1: function () {
    console.log(this.username)
  },
  p2: () => {
    console.log(this.username)// arrow function no ec    ==> here point to global object --> this will lexical scope to it so it point to that object
  }
}
user.p1()
user.p2()
