{
  const byCallback = document.querySelector('#by-callback')

  const data = [
    { name: 'gourav', profession: 'sde' },
    { name: 'prashant', profession: 'trader' }
  ]
  let output = []
  const getData = () => {
    setTimeout(() => {
      data.forEach(d => {
        output += `<li> ${d.name} </li>`
      })
      byCallback.innerHTML = output
    }, 1000)
  }

  const createData = (newData, getData) => {
    setTimeout(() => {
      data.push(newData)
      getData()
    }, 2000)
  }
  createData({ name: 'atul', profession: 'java developer' }, getData)
}
