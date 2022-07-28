//fuction creating object , this sai create varible /update , return created object
// construction function by this keyword only we can add property
function Elf (name, weapon) {
  this.name = name
  this.weapon = weapon
  power = 4//! not added
}

const peter = new Elf('peter' , 'stoner')
console.log(peter.weapon);
console.log(peter);