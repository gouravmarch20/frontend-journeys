 firstFunction()
  .then(result => secondFunction(result))
  .then(newResult => thirdFunction(newResult))
  .then(finalResult => {
    console.log(`fineal result : ${finalResult}`)
  })
  .catch(failureCallback)
