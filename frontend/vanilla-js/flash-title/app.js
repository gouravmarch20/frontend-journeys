const title = document.title
const newTitle = 'gourav'

const titleId = setInterval(() => {
   document.title === title ? document.title = newTitle : document.title = title
}, 1000);

setInterval(() => {
   console.log('inter');

   clearInterval(titleId)
}, 9000)