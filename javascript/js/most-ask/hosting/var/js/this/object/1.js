// ? why function this point to window object 
// both point to window object 
function displayAge () {
  console.log(23, this)
}
displayAge()
displayAge.call()
// ! why it point to window object
// *** behind the scene --> so this point to window object 
window.displayAge()