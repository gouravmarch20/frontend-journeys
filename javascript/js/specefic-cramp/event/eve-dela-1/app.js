const x = document.querySelector('#form')
x.addEventListener('keyup', e => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase()
  }
})
