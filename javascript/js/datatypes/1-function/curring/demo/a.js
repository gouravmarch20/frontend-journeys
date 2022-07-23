function createFunc () {
  const name = [1, 2, 3]
  const nameFunc = []
  for (let i = 0; i < name.length; i++) {
    nameFunc.push(function () {
      console.log(name[i])
    })
  }
  return nameFunc
}

const confi = createFunc()
//    console.log(confi);
confi[0]()
