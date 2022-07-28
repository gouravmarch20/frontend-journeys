const div = document.querySelector('div')
const button = document.querySelector('button')

div.addEventListener(
  'click',
  () => {
    console.log('div - parent')
  },
  true
)
button.addEventListener(
  'click',
  () => {
    console.log('btn clicked -- child')
  },
  true
)
