// ? rest parameter must be the last params 

const fn = (a,...num ,  x, y ) => {
  console.log(x)
  console.log(y)
}
fn(4, 6, 3, 9)
