setTimeout(() => {
  console.log('set time out ')
}, 3000)
const funTwo = () => console.log('coustom')
const funOne = cb => cb()

funOne(funTwo)
