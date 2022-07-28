// ? basic for loop
// inital value  only run once
// condition  check
// code run && after code end increment case ==>  in condtion check it asign new value
// ! each  itteration let /const ==> value destory due to block scope
const upperCase = str => {
  for (let i = 0; i < str.length; i++) {
    const asciiValue = str[i].charCodeAt()
    console.log(asciiValue)
  }
}
upperCase('abc Abc ')

const arr = [1, 3]
for (let i = 0; i < arr.length; ) {
  i++ //? run each time code end & value asign to condition check ==> before it destored
}
console.log(i)
