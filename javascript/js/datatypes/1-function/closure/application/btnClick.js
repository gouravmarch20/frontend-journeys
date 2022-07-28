const clickCounter = () => {
  let counter = 0
  return () => {
    if (counter > 0) {
      console.log('--already clicked--')
      return null
    } else {
      console.log('action perform')
      counter++
    }
  }
}
const btnClickCounter = clickCounter()
btnClickCounter()
btnClickCounter()
btnClickCounter()
