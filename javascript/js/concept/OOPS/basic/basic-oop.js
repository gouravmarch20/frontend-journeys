//encapsulate : function & data
class Elf {
  constructor (name, weapon) {
    this.name = name
    this.weapon = weapon
    
  }
  //no memory consume
  attack () {
    return 'attack with --> ' + this.weapon
  }
}

const peter = new Elf('peter', 'stone3')
// console.log(peter.attack())
console.log(peter)

