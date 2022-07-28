const animal ={
    name : 'tiger',
    power : 44 ,
    color :'yellow'
}
const {tiger , ...rest} = animal
console.log(rest);