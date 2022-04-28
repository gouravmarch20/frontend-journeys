// ! convort cb hell into promise & async await
firstFunction(function (result) {
  secondFunction(
    result,
    function (newResult) {
      thirdFunction(
        newResult,
        function (finalResult) {
          console.log('final result ' + finalResult)
        },
        failureCallback
      )
    },
    failureCallback
  )
}, failureCallback)

