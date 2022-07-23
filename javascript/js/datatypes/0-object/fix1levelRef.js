
// avoid ref issue by spread --> object , array
const ironMan = {
  name: 'git'
}
const ironManClone = { ...ironMan }
ironManClone.name = 'gitman'
console.log(ironMan)
console.log(ironManClone)
