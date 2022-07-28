// this  refer to the object on which we call our function 
//? obj1.fun() --> this point to obj1 
// *** function rarely wrap in array --> because function are never same times 
// this no use inside object alone we requrie to wrap in function so that it point to object 
// ? the value of this depend on function ==> window.functionCall() then point to window object , if our object --> obj.functionCall() :: then it point to that object  