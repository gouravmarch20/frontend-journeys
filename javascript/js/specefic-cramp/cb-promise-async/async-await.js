{
  const asyncAwait = document.querySelector('#async-await')

  const data = [
    { name: 'gourav', profession: 'sde' },
    { name: 'prashant', profession: 'trader' }
  ]
  let output = []
  function getData () {
    setTimeout(() => {
      data.forEach(d => {
        output += `<li> ${d.name} </li>`
      })
      asyncAwait.innerHTML = output
    }, 1000)
  }

  const createData = newData => {
    setTimeout(() => {
      data.push(newData)
    }, 2000)
  }
  const start = async () => {
    await createData({ name: 'atul', profession: 'java developer' })
    getData()
  }
  start()
}
