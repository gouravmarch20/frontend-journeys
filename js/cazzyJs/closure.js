function callMe() {
    setTimeout(function () { console.log(call)
    console.log("settime out end")
    },4000)
    const call = 'hii'//! store as closure varible => grabage collector not remove it 
}
callMe()