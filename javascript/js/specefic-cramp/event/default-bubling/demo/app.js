let div = document.querySelector('div')
let button = document.querySelector('button')
div.addEventListener('click', () => {
  console.log('div - parent')
})
button.addEventListener('click', () => {
  console.log('btn clicked -- child')
})
