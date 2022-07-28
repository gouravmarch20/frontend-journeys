let a = {
  name: 'git',
  say () {
    return function () {
      console.log('this')
    }
  }
}
a.say()()
 