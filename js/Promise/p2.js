//TODO: PROMISE CHANING
// WHAT EVER WE return .then it return promise
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
// 1 st .then return promise because we had change the promise 
// so 2nd .then it return data because 1st then chain
const getServerResponseLength = (msg) => {
    fakeFetch(msg, false).then(data => data.length).then(data => console.log(data)).catch(error => console.log("error -->" + error))
}

console.log(getServerResponseLength("hii"))