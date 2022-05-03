/*
1. params vs argument 

--> F.C -> argument , F.D --> params


2. Every function has 3 property ==> call , bind , apply 

3. what is function declaration / functin statement -> F.D 
4. function expression -> when we store a function  inside a varible ==> treating function as varible && we require to use annomynous function there --> it will be invoked by varible as f.c

5. what is annomus function && demostrate annonums function

 - function without name 
 - if want to give name --> we give name -->  by asigning it to varible 
 - it widely  use in CB function  or arrow function 

 6. why we write function inside varible 
  - better syntax we can easy pass as params without instant invoking

  7. what is first class function 
   - function can be treated  as varible => function can be passed to  other function , return function ,  -> just like we pass or return varible in function

   8. iffe && demostrate -> imidetely invoked funtion 
    - wrap in braket and called it right now
*/

// 4. fun1 -> is function expression
const fun1 = num => {
  return num * num
}
//5 function inside varible fun2 --> this function is anynomous function --> it is called like normally we passed function
const fun2 = num => {
  return num * num
}
// 7. function as first class citizen -> apply propery of varible

// 8.

const square = num => num * num
const displaySquare = fn => {
  console.log('hello ', fn(43))
}
displaySquare(square)
// 9.
(
  function fun9 (num) {
    console.log(num * num)
  }
)()
