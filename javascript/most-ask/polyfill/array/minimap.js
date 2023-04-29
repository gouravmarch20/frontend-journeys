let data = [1, 2, 3, 4, 5];
Array.prototype.customMap = function (x) {
  for (let i = 0; i < data.length; i++) {
    console.log(x(this[i]));
  }
  return "----20"

};

let output = data.customMap((item) => item * 10);
console.log(output);