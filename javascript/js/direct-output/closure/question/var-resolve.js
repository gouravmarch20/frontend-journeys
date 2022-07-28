// closure sai solve var case
function timerA () {
  for (var i = 0; i < 5; i++) {
    function closureCreate (num) {
      setTimeout(() => {
        console.log(num)
      }, num * 1000)
    }
    // every time function call new scope in function define --> EC MAI GO -> EC destroy but it's varible not 
    closureCreate(i)
  }
}
timerA()
