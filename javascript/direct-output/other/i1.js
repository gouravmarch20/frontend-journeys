const arr = [3 , 4 , 5]
arr.foo = 5;
console.log(arr);

for(let i in arr){
   console.log(i);
}
for(let i of arr){
   console.log(i);
}
