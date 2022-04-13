// settime : argument 1st is annomys function && a callback function
// setTimeOut run when after timeUp end & run once
// setTimeOut async run because it is an webApi => after timeout it go to ==> cb quee mai its call code go then main thred by event loop
let cb = () => console.log('first')
setTimeout(cb, 1000)
