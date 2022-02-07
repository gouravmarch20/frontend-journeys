// Promise ==> resolve , reject , pending
//  resolve run --> resolve return it data to .then 
// reject run  -->  reject return data to .catch
function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server : ${msg}`);
            }
            resolve(`from server : ${msg}`);
        }, 2000)
    })
}
// way 1 : 
fakeFetch(`top line has option to kill time`, true).then(data => console.log(data)).catch(error => console.log("error -->" + error))

const sucessHandler = data => console.log(data)
const errorHandler = error => console.log(error)
// way 2 : then => promise return to then/catch => by default it pass to callback function as argument
fakeFetch(` but for bottom line it not`, false).then(sucessHandler).catch(errorHandler)