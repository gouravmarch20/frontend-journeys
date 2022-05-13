// privacy of varible => count 
function x() {
    var count = 0;
    return function incrementCounter () {
        count++
        console.log(count)
    }
}
var y = x()
y()
y()
y()