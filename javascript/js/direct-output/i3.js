// m1 : i++ kai bad case check 
// for loop run first all as it is var it will override previous value as it have function level scope , setTimeOut cb go to webA pi ==> cbQueue ==> event loop ==> main stack ---> by ref it acess varible value --> & print i final value


for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }
  setTimeout(log, 10)
}
