const searchInput = document.getElementById("search_input")

const loadApi = (url) => {

   // limit api hit only onece
   let isLoaded = document.querySelectorAll('.dynamic-script')
   console.log(isLoaded);
   if (isLoaded.length > 0) {
      console.log('======> api already fetch');

      return
   }

   let myScript = document.createElement('script')
   myScript.src = url
   myScript.className = 'dynamic-script'
   document.body.appendChild(myScript)
   console.log('api fetched');


}
searchInput.addEventListener('focus', (e) => {
   loadApi('https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js')
})