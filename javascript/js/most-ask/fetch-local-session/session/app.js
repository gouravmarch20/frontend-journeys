const input = document.getElementById('myInput')
const getLocal = document.getElementById('get-Local')
const setLocal = document.getElementById('set-local')
const deleteSpecefic = document.getElementById('delete-specefic')
const deleteAll = document.getElementById('delete-all')

const loadLocal = e => {
  const tempValue = localStorage.getItem('key1')
  const tempValue2 = localStorage.getItem('key2')
  console.log(tempValue)
  console.log(JSON.parse(tempValue2))
}

const updateLocal = e => {
  localStorage.setItem('key1', 'gitbash')
  const obj = {
    name: 'gitman',
    surname: 'alpha'
  }
  localStorage.setItem('key2', JSON.stringify(obj))
}
const removeSession = e => {
  //delete
  localStorage.removeItem('key1')
  //   sessionStorage.clear() //all clean up
}

getLocal.addEventListener('click', loadLocal)
setLocal.addEventListener('click', updateLocal)
deleteSpecefic.addEventListener('click', removeSession)
