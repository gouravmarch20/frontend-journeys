// data privicy : varible overlaping issue --> data privicy
//  var in iffe not fall in GC -> each function has owm ec

var a = 5
;(function (word) {
  console.log(a)
  var prefix = 'we are learnig iffe' //no colide in gc
  console.log(word, ' --->  ', prefix)
})('hellow world')
console.log(prefix);

console.log(prefixOne)//? get another file varible
var prefixOne = 'from core  js file'
console.log(prefixOne)
