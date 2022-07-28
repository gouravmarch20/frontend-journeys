//creating our owm callback function -->  function as an argument

const printName = nameLength =>
  console.log(`OMG! My name is ${nameLength} --> charcter long`)
const strLength = (name, callback) => {
  const lengthOfName = name.length
  callback(lengthOfName)
}
strLength('gourav', printName)
