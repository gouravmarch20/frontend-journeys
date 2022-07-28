


// ? var : function scope => 
// even inside block whole function wrap can acess it

function scope() {
    console.log(a)
    { var a = 5 }
    console.log(a)
}
scope()

// example 2 : var has function scope => so here varaible secreat will find in global context
if (5 > 4 ) {
    
    var secret = 'gouravF'
}
console.log(secret)