function areaOfHexagon (side) {
  return (3 * Number(Math.sqrt(3).toFixed(2)) * Math.pow(side, 2)) / 2
}
console.log(areaOfHexagon(10))
