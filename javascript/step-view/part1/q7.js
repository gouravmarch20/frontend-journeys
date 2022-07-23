// THIS
// ? IMPLICIT BINDING ==> by this keyword 
let ask = {
  teacher: 'akansha',
  who: function () {
    console.log(this.teacher)
  }
}
ask.who()
