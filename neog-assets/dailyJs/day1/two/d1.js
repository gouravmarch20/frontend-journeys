// this acess array value
Array.prototype.coustomLength = function () {
  for (var i = 0; this[i] !== undefined; i++) {}
  return i
}
console.log([1, 3, 4].coustomLength())
