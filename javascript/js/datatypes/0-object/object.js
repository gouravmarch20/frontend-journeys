
// if we create any function inside object it can not aces value of the object so we this keyword

// function inside object called method , value inside object called property

// ? this keyword inside object => it point to varible who create that function 
const a = {
  name: 'gitman',
  age: 33,
  isValid: true,
  living: { city: 'delhi', pincode: 100010 },
  favMovie: ['shershan', 'the founder', 'cosmic'],
  acessData: function () {
    return this.name
  }
  
}
console.log(a.acessData())
