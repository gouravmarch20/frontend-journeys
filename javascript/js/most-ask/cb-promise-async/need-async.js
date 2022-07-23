const needAsync = document.querySelector('#need-async')

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
    needAsync.innerHTML = output
  }, 1000)
}

const createData = newData => {
  setTimeout(() => {
    data.push(newData)
  }, 2000)
}
createData({ name: 'atul', profession: 'java developer' })
getData()
