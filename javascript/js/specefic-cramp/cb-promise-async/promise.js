{
  const byPromise = document.querySelector('#by-promise')

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
      byPromise.innerHTML = output
    }, 1000)
  }

  const createData = newData => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.push(newData)
        let error = false
        if (!error) {
          resolve('message : sucess ')
        } else {
          reject('nothint ios fine')
        }
      }, 2000)
    })
  }

  createData({ name: 'atul', profession: 'java developer' })
    .then(res => {
      console.log(res)
      getData()
    })
    .catch(err => console.log(err))
    .finally(msg => console.log('now hit')) //FIXME:
}
