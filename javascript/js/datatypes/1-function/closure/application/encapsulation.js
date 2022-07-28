const nuclearFire = () => {
  let timeForDestruction = 1
  const increseTime = () => ++timeForDestruction
  const getTime = () => timeForDestruction
  const launch = () => {
    timeForDestruction = null
    return 'fired'
  }
}
// can't acess directlly
console.log(nuclearFire.timeForDestruction)
console.log(nuclearFire.a)
console.log(nuclearFire.getTime())
