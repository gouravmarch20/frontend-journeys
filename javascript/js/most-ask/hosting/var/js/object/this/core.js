var a = {
    name: 'go',
    say() {
        console.log(this)
    }
}
// ? 
var b = {
    name: 'git',
    say() {
        return function () { console.log(this) }
    }
} 
// ? remove side-effects
var c = {
    name: 'git',
    say() {
        return  () =>{ console.log(this) }
    }
}
// a.say()
// b.say()()
c.say()()