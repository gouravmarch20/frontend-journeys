
// if key avalible return true
const obj = {
  name: 'gitman',
  classwa: 5,
  fun1 : function(){
      console.log('object');
  }
}
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('fda'));
console.log(obj.hasOwnProperty('fun1') , '--------- metord ---');
console.log('valueOf' in obj);//** proto inherit 
// --- dynamic key
console.log(obj.hasOwnProperty(['classwa']));