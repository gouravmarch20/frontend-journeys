//spread operator use & then combine =>  avoid ref issue or immutability avoid
const gourav = { mother: "usha", age: 40, level: "leveldotO" };
const gotan = { ...gourav, mother: "vin", age: gourav.age - 4 }
console.log(gotan)

const color = ["orange ",
    "green "]
const newColor = [...color, "blue ", "red"]
console.log(newColor)
console.log(color)