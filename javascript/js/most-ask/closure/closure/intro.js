const outerFun = () => {
  let data = 'loe123'
  return (innerFun = () => ` acess varible even it's context has been removed ==>  ${data}`)
}

const runInnerFunLevelOne = outerFun()
console.log(runInnerFunLevelOne())
