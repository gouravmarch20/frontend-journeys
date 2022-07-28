// bad way
const goku = {
  name: 'goku',
  fire: true,
  move: 'gamai',
  fightPower () {
    return 84
  },
  sing () {
    if (this.fire) {
      return ` - - ${this.name} the fire man --`
    }
  }
}
let gotan = {
  name: 'gotan'
}
gotan.__proto__ = goku
console.log(gotan.sing())
console.log(gotan.fire)
// -- base object methord acessible also
goku.isPrototypeOf(gotan)
