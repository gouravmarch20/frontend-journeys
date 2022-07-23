const hello = async () => 'hello'

// console.log(printHello())// return pomise async we require to resolve it

hello().then(data => console.log(data))
hello().then(console.log)//shortcut -> print coming value
