// EC  , GC : 2 PAHSE code execution --> 1. Memory creation , 2. Code execution
//l1: params are var type varible , const no chance , let pramasName asign error mai telling can't assign
var n = 2
function square (num) {
  let num = 4
  var ans = num * num
  return ans
}
var square2 = square(n)
var square4 = square(4)
/* 
G.C : 
 - MEMORY creation  / 1 PHASE
-> n = undefined , square2 = undefined , square4 = undefined , square : FD
- CODE EXECUTION PHASE / 2 PHASE
line 1: trigger n =2 ,
line 6: trigger new E.C for square function
*/
/*
- MEMORY creation phase / 1 PHASE
num = undefined
ans = undefined
- CODE EXECUTION PHASE / 2 PHASE
num = 2 , ans = 4 , return 4 

destrory EC

*/
/*
- MEMORY creation phase / 1 PHASE
num = undefined
ans = undefined
- CODE EXECUTION PHASE / 2 PHASE
num = 4 , ans = 16 , return 16



*/
