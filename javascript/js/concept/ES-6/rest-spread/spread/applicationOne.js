// avoid ref issue by spread --> object , array
const ironMan = {
  name: 'git'
}
const ironManClone = { ...ironMan }
ironManClone.name = 'gitman'
console.log(ironMan)

const arrOne = [3, 4]
const arrTwo = [...arrOne]
arrTwo[3] = [44423, 323]
console.log(arrOne)
console.log(arrOne[2])
