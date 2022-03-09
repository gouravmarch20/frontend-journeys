// in primitive : pass by value
const a = 5;
let b = a
b++;
console.log(a)
//in object : pass by reference
let arr = [5, 33, 66]
let arrOne = arr
arrOne.push(123)
console.log(arr);

let obj = { name: "gour" }
let objOne = obj
objOne.name = "gourOne"
console.log(obj.name)
// ?  to avoid 
// array => map , concat 
// object => spread operator

// spread operator fail in layer of object => shollow clone concept => 
const shallow = {
    name: "gourav", rool: {
        deeplink: "uu"
    }
}
let superClone = JSON.parse(JSON.stringify(obj))
superClone.rool.deeplink = "superClone"
console.log(shallow)