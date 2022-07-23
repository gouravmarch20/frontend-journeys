// ? rest parameter must be the last params

const fn = (a, x, ...num) => {
  console.log(x)
  console.log(num)
}
fn(4, 6, 3, 9)
