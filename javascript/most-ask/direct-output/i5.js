// iffe to have new scope --> the var have own scope --> so no override
for (var i = 0; i < 3; i++) {
  ;(function (y) {
    const log = () => {
      console.log(y)
    }
    setTimeout(log, 1000)
  })(i)
}
