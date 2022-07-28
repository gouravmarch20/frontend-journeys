const x = () => {
  const num1 = 5
  return () => {
    console.log(num1)
  }
} 
// closute 
const funTwo = x()
funTwo()
x()()//curring 
