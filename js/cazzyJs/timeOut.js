// setTimeOut => webApi wait  + async  run so rest code run
const log = () => {
  console.log(1)

  setTimeout(() => console.log(2), 1000)// it will pause in webApi till 1 sec , then callback queue , then event loop , then call stack 
  setTimeout(() => console.log(3), 0)// event loop empty take it from callback queue
  console.log(4);// async reason it will run
}
log()