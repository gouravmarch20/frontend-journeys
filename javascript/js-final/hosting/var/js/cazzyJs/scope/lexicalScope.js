// a value not found on their execution context ==> by lexical scope their acess the value of a
//! child can acess parent context varible if they had not that varible
const a = 44
const functionOne = () => {
  for (let i = 0; i < 3; i++) {
    console.log(a)
  }

  const functionTwo = () => {
    console.log(a)
  }
  functionTwo()
}

functionOne()
