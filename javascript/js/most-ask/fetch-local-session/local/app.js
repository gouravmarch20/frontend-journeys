const input = document.getElementById('myInput')
const btn = document.getElementById('myBtn')
const deleteBtn = document.getElementById('deleteBtn')
const getSession = document.getElementById('getSession')
const btnClick = e => {
  console.log('object')
  // post / update
  sessionStorage.setItem('key1', 'hitman')
}
const removeSession = e => {
  //delete
  sessionStorage.removeItem('key1')
  sessionStorage.clear()//all clean up
}
const loadSession = e => {
  //delete
  const temp = sessionStorage.getItem('key1')
  console.log(temp)
}

btn.addEventListener('click', btnClick)
deleteBtn.addEventListener('click', removeSession)
getSession.addEventListener('click', loadSession)
