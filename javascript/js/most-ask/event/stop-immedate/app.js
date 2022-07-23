let div = document.querySelector('div')
let button = document.querySelector('button')
div.addEventListener('click', () => {
  console.log('div - parent')
})
button.addEventListener('click', e => {
  console.log('btn clicked -- child')
})
button.addEventListener('click', (e) => {
    // console.log("no one run now");
  e.stopImmediatePropagation()
  console.log('btn  -- child')
})
button.addEventListener('click', () => {
  console.log('btn ww -- child')
})
