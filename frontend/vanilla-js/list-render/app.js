const arr = [
   {
      name: 'omni',
      age: 444
   },
   {
      name: 'meta',
      age: 1,
   }
]
const lists = document.getElementById('lists')
arr.forEach(item => {
   const li = document.createElement('li');
   li.textContent = `${item.name} ----> and his age is ===>  ${item.age}`
   lists.appendChild(li)

})