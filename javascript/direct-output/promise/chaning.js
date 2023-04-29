const p = new Promise((res, rej) => res(2))
p.then(res => {
   console.log(res);
   return res * 2
}).then((res) => {
   console.log(res);
   return res * 2
}).finally((res) => {
   console.log("finally" , res);
   return 0
}).then((res) => {
   console.log(res);
   return res * 2
}).catch((r)=>{
   console.log(r);
}).finally((res) => {
   // TODO: FINALLY NOT TAKING RESPONSE OF CHANING ---- ONLY EXECUTE 
   console.log("finally" , res);
})