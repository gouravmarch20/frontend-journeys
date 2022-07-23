const category = document.querySelector('#category')

category.addEventListener('click', e => {
  console.log(e.target.id)
  if (e.target.tagName === 'LI') {
    window.location.href = '/' + e.target.id
  }
  console.log('category parent clicked')
})
