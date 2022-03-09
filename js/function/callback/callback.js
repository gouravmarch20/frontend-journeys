//creating our owm callback function --> 
// function as an argument
// ! c1
const strLength = (name, callback) => {
    const lengthOfName = name.length
    callback(lengthOfName)
}
const printName = nameLength => console.log(`OMG! My name is ${nameLength} --> charcter long`)

strLength("gourav", printName)
// ! c2
const iAlived = () => {
    console.log("Ya i am alive ")
}
const iDied = () => {
    console.log("thanos killed me ,  itc will hit 600 in upcoming years")
}

const willThanosKillMe = (name, iAlived, killed) => {
    const decided = name.length % 2
    decided ? iDied() : iAlived()
}
willThanosKillMe("gourav", iAlived, iDied)
//!c3 >>
const printMessage = (message) => {
    console.log(message)
}
const delayMessage = (message, delay, printMessage) => {
    setTimeout(() => printMessage(message), delay)
}
delayMessage("message will display with delay of 4 second ", 4000, printMessage)