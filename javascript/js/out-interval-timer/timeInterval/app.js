const btn = document.getElementById('button-cancel')
const printName = name => {
  console.log(`welcome ${name} ${Math.ceil(Math.random() * 10)}`)
}

const id = setInterval(printName, 1000, 'gourav')
btn.addEventListener('click', () => {
  console.log('end of setTime interval who having  id no -> ', id)
  //   not run setiimeout function if we cancel the timer
  clearInterval(id)
})
