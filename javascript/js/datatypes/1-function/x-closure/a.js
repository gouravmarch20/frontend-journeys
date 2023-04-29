const test = () => {
  let a = 300;
  let fun = function inner() {
    a++;
    return a;
  };
  return fun;
};
let inner = test()
console.log(inner())
console.log(inner())
console.log(inner()) 