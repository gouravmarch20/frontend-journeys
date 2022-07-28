const heavyDuty = () => {
  const bigArray = new Array(7000).fill('👌')
  console.log('------ run only once -----------')
  return function (index) {
    return bigArray[index]
  }
}
const memo = heavyDuty()
console.log(memo(4));
console.log(memo(344));
console.log(memo(3824));
console.log(memo(4444));