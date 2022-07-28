// var function scope so each same varible update 
//setTime is async function so it has gone to webApi --> cb queue --> 
// for loop end but it varible not removed GC  end it has refrence
// time out -->  remeber ref so all time 5 print
function timerA () {
  for (var i = 0; i < 5; i++) {
    //** closure */
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}
timerA()
