// arrTwo => get memory address of arrOne so edit will impact arrOne
const arrOne = [1 , 3 , 5]
const arrTwo = arrOne
arrTwo[3] = [5 , 3 , 223 , 3423]
console.log(arrOne);