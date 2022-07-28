let a = {
    name: 'git',
    say () {
      return  ()=> {
        console.log(this)
      }
    }
  }
  a.say()()
   