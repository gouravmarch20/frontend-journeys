
// setTime out syntax issue
for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }
  setTimeout(() => {
    log
  }, 1000)
}
