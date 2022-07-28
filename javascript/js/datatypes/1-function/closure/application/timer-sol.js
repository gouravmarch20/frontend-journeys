for (var i = 0; i < 5; i++) {
  function timer (closureI) {
    setTimeout(() => {
      console.log(closureI)
    }, closureI * 1000)
  }
  timer(i)
}
