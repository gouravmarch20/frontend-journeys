
// ! collosure sai ref issue ==> use as edge
function x() {
    for (let i = 0; i <= 5; i++) {

        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
    console.log("first")
}
x()