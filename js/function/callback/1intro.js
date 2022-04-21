// the function that pass as argument in Hof is called callback function ==> inbuild methord cb function
//? if coustom cb function : we pass cb function as argument & call it after doing some logical task

// ! not run quickly run after the depency task done
// map --> 1 cb  function --> contain 3 arguments
// filter --> 1 cb function
// promise / setTimeout/ setTimeInterval --> callback function run in callback quea
//* we can create our owm callback function ==> and when core task complete then we can cb function

// settime : argument 1st is annomys function && a callback function
// setTimeOut run when after timeUp end & run once
// ! setTimeOut async run because it is an webApi => after timeout it go to ==> cb quee mai its call code go then main thred by event loop
let cb = () => console.log('first')
setTimeout(cb, 2000)
